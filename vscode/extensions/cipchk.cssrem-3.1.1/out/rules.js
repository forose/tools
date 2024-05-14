"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetRules = exports.RULES = void 0;
const nls = require("vscode-nls");
const config_1 = require("./config");
const localize = nls.config({ messageFormat: nls.MessageFormat.both })(__filename);
exports.RULES = [];
function cleanZero(val) {
    if (config_1.cog.autoRemovePrefixZero) {
        if (val.toString().startsWith('0.')) {
            return val.toString().substring(1);
        }
    }
    return val + '';
}
function resetRules() {
    exports.RULES.length = 0;
    exports.RULES.push({
        type: 'pxToRem',
        all: /([-]?[\d.]+)px/g,
        single: /([-]?[\d.]+)p(x)?$/,
        fn: text => {
            const px = parseFloat(text);
            const resultValue = +(px / config_1.cog.rootFontSize).toFixed(config_1.cog.fixedDigits);
            const value = cleanZero(resultValue) + 'rem';
            const label = `${px}px -> ${value}`;
            return {
                type: 'pxToRem',
                text,
                px: `${px}px`,
                pxValue: px,
                remValue: resultValue,
                rem: value,
                value,
                label,
                documentation: localize(0, null, px, value, config_1.cog.rootFontSize),
            };
        },
        hover: config_1.cog.remHover ? /([-]?[\d.]+)px/ : null,
        hoverFn: pxText => {
            const px = parseFloat(pxText);
            const val = +(px / config_1.cog.rootFontSize).toFixed(config_1.cog.fixedDigits);
            return {
                type: 'remToPx',
                from: `${px}px`,
                to: `${val}rem`,
                documentation: localize(1, null, val, config_1.cog.rootFontSize),
            };
        },
    }, {
        type: 'remToPx',
        all: /([-]?[\d.]+)rem/g,
        single: /([-]?[\d.]+)r(e|em)?$/,
        fn: text => {
            const px = parseFloat(text);
            const resultValue = +(px * config_1.cog.rootFontSize).toFixed(config_1.cog.fixedDigits);
            const value = cleanZero(resultValue) + 'px';
            const label = `${px}rem -> ${value}`;
            return {
                type: 'remToPx',
                text,
                px: `${px}px`,
                pxValue: px,
                remValue: resultValue,
                rem: value,
                value,
                label,
                documentation: localize(2, null, px, value, config_1.cog.rootFontSize),
            };
        },
        hover: /([-]?[\d.]+)rem/,
        hoverFn: remText => {
            const rem = parseFloat(remText);
            const val = +(rem * config_1.cog.rootFontSize).toFixed(config_1.cog.fixedDigits);
            return {
                type: 'remToPx',
                from: `${rem}rem`,
                to: `${val}px`,
                documentation: localize(3, null, val, config_1.cog.rootFontSize),
            };
        },
    }, {
        type: 'pxSwitchRem',
        all: /([-]?[\d.]+)(rem|px)/g,
        fn: text => {
            const type = text.endsWith('px') ? 'pxToRem' : 'remToPx';
            const rule = exports.RULES.find(r => r.type === type);
            return rule.fn(text);
        },
    });
    if (config_1.cog.vw) {
        exports.RULES.push({
            type: 'pxToVw',
            all: /([-]?[\d.]+)px/g,
            single: /([-]?[\d.]+)p(x)?$/,
            fn: text => {
                const px = parseFloat(text);
                const resultValue = +(px / (config_1.cog.vwDesign / 100.0)).toFixed(config_1.cog.fixedDigits);
                const value = cleanZero(resultValue) + 'vw';
                const label = `${px}px -> ${value}`;
                return {
                    type: 'pxToVw',
                    text,
                    px: `${px}px`,
                    pxValue: px,
                    vwValue: resultValue,
                    vw: value,
                    value,
                    label,
                    documentation: localize(4, null, px, value, config_1.cog.vwDesign, config_1.cog.rootFontSize),
                };
            },
            hover: config_1.cog.vwHover ? /([-]?[\d.]+)px/ : null,
            hoverFn: pxText => {
                const px = parseFloat(pxText);
                const val = +(px / config_1.cog.rootFontSize).toFixed(config_1.cog.fixedDigits);
                return {
                    type: 'pxToVw',
                    from: `${px}px`,
                    to: `${val}vw`,
                    documentation: localize(5, null, val, config_1.cog.rootFontSize, config_1.cog.vwDesign, config_1.cog.rootFontSize),
                };
            },
        }, {
            type: 'vwToPx',
            all: /([-]?[\d.]+)vw/g,
            single: /([-]?[\d.]+)vw?$/,
            fn: text => {
                const vw = parseFloat(text);
                const resultValue = +(vw * (config_1.cog.vwDesign / 100.0)).toFixed(config_1.cog.fixedDigits);
                const value = cleanZero(resultValue) + 'px';
                const label = `${vw}vw -> ${value}`;
                return {
                    type: 'vwToPx',
                    text,
                    px: `${vw}px`,
                    pxValue: vw,
                    vwValue: resultValue,
                    vw: value,
                    value,
                    label,
                    documentation: localize(6, null, vw, value, config_1.cog.vwDesign, config_1.cog.rootFontSize),
                };
            },
            hover: /([-]?[\d.]+)vw/,
            hoverFn: rpxText => {
                const vw = parseFloat(rpxText);
                const val = +(vw * (config_1.cog.vwDesign / 100.0)).toFixed(config_1.cog.fixedDigits);
                return {
                    type: 'vwToPx',
                    from: `${vw}vw`,
                    to: `${val}px`,
                    documentation: localize(7, null, val, config_1.cog.vwDesign, config_1.cog.rootFontSize),
                };
            },
        }, {
            type: 'vwSwitchPx',
            all: /([-]?[\d.]+)(vw|px)/g,
            fn: text => {
                const type = text.endsWith('px') ? 'pxToVw' : 'vwToPx';
                const rule = exports.RULES.find(r => r.type === type);
                return rule.fn(text);
            },
        });
    }
    if (config_1.cog.wxss) {
        exports.RULES.push({
            type: 'pxToRpx',
            all: /([-]?[\d.]+)px/g,
            single: /([-]?[\d.]+)p(x)?$/,
            fn: text => {
                const px = parseFloat(text);
                const resultValue = +(px * (config_1.cog.wxssScreenWidth / config_1.cog.wxssDeviceWidth)).toFixed(config_1.cog.fixedDigits);
                const value = cleanZero(resultValue) + 'rpx';
                const label = `${px}px -> ${value}`;
                return {
                    type: 'pxToRpx',
                    text,
                    px: `${px}px`,
                    pxValue: px,
                    rpxValue: resultValue,
                    rpx: value,
                    value,
                    label,
                    documentation: localize(8, null, px, value, config_1.cog.wxssDeviceWidth, config_1.cog.wxssScreenWidth),
                };
            },
        }, {
            type: 'rpxToPx',
            all: /([-]?[\d.]+)rpx/g,
            single: /([-]?[\d.]+)r(p|px)?$/,
            fn: text => {
                const px = parseFloat(text);
                const resultValue = +(px / (config_1.cog.wxssScreenWidth / config_1.cog.wxssDeviceWidth)).toFixed(config_1.cog.fixedDigits);
                const value = cleanZero(resultValue) + 'px';
                const label = `${px}rpx -> ${value}px`;
                return {
                    type: 'rpxToPx',
                    text,
                    px: `${px}px`,
                    pxValue: px,
                    rpxValue: resultValue,
                    rpx: value,
                    value,
                    label,
                    documentation: localize(9, null, px, value, config_1.cog.wxssDeviceWidth, config_1.cog.wxssScreenWidth),
                };
            },
            hover: /([-]?[\d.]+)rpx/,
            hoverFn: rpxText => {
                const rpx = parseFloat(rpxText);
                const val = +(rpx / (config_1.cog.wxssScreenWidth / config_1.cog.wxssDeviceWidth)).toFixed(config_1.cog.fixedDigits);
                return {
                    type: 'rpxToPx',
                    from: `${rpx}rpx`,
                    to: `${val}px`,
                    documentation: localize(10, null, val, config_1.cog.wxssDeviceWidth, config_1.cog.wxssScreenWidth),
                };
            },
        }, {
            type: 'rpxSwitchPx',
            all: /([-]?[\d.]+)(rpx|px)/g,
            fn: text => {
                const type = text.endsWith('rpx') ? 'rpxToPx' : 'pxToRpx';
                const rule = exports.RULES.find(r => r.type === type);
                return rule.fn(text);
            },
        });
    }
}
exports.resetRules = resetRules;

//# sourceMappingURL=rules.js.map
