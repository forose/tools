"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIngore = exports.loadConfig = exports.cssremConfigFileName = exports.cog = void 0;
const fs_1 = require("fs");
const jsonc_parser_1 = require("jsonc-parser");
const path_1 = require("path");
const vscode_1 = require("vscode");
const rules_1 = require("./rules");
exports.cssremConfigFileName = '.cssrem';
function loadConfigViaFile() {
    var _a;
    if (vscode_1.workspace.workspaceFolders == null || ((_a = vscode_1.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
        return;
    }
    const cssremConfigPath = (0, path_1.join)(vscode_1.workspace.workspaceFolders[0].uri.fsPath, exports.cssremConfigFileName);
    if (!(0, fs_1.existsSync)(cssremConfigPath)) {
        console.log(`Not found file: ${cssremConfigPath}`);
        return;
    }
    try {
        const res = (0, jsonc_parser_1.parse)((0, fs_1.readFileSync)(cssremConfigPath).toString('utf-8'));
        exports.cog = Object.assign(Object.assign({}, exports.cog), res);
        console.warn(`Use override config via ${cssremConfigPath} file`);
    }
    catch (ex) {
        console.warn(`Parse error in ${cssremConfigPath}`, ex);
    }
}
function fixIngores() {
    var _a;
    if (!Array.isArray(exports.cog.ingores))
        exports.cog.ingores = [];
    if (vscode_1.workspace.workspaceFolders == null || ((_a = vscode_1.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
        return;
    }
    const rootPath = vscode_1.workspace.workspaceFolders[0].uri.path;
    exports.cog.ingores = exports.cog.ingores.map(p => (0, path_1.join)(rootPath, p));
}
function fixLanguages() {
    if (!Array.isArray(exports.cog.languages))
        exports.cog.languages = [];
    if (exports.cog.languages.length > 0)
        return;
    exports.cog.languages = [
        'html',
        'vue',
        'css',
        'postcss',
        'less',
        'scss',
        'sass',
        'stylus',
        'javascriptreact',
        'typescriptreact',
        'javascript',
        'typescript',
    ];
}
function loadConfig() {
    exports.cog = Object.assign({}, vscode_1.workspace.getConfiguration('cssrem'));
    Object.keys(exports.cog).forEach(key => {
        if (typeof exports.cog[key] === 'function')
            delete exports.cog[key];
    });
    loadConfigViaFile();
    fixIngores();
    fixLanguages();
    (0, rules_1.resetRules)();
    console.log('Current config', exports.cog);
}
exports.loadConfig = loadConfig;
function isIngore(uri) {
    return exports.cog.ingores.some(p => uri.path.startsWith(p));
}
exports.isIngore = isIngore;

//# sourceMappingURL=config.js.map
