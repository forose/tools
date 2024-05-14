"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const completion_1 = require("./completion");
const config_1 = require("./config");
const hover_1 = require("./hover");
const line_annotation_1 = require("./line-annotation");
const process_1 = require("./process");
let process;
function activate(context) {
    (0, config_1.loadConfig)();
    vscode_1.workspace.onDidChangeConfiguration(() => (0, config_1.loadConfig)());
    process = new process_1.CssRemProcess();
    const LANS = [...config_1.cog.languages];
    if (config_1.cog.wxss) {
        LANS.push('wxss');
    }
    for (const lan of LANS) {
        const providerDisposable = vscode_1.languages.registerCompletionItemProvider(lan, new completion_1.default(lan, process));
        context.subscriptions.push(providerDisposable);
    }
    if (config_1.cog.hover !== 'disabled') {
        const hoverProvider = new hover_1.default();
        context.subscriptions.push(vscode_1.languages.registerHoverProvider(LANS, hoverProvider));
    }
    const ingoresViaCommand = (config_1.cog.ingoresViaCommand || []).filter(w => !!w).map(v => (v.endsWith('px') ? v : `${v}px`));
    context.subscriptions.push(vscode_1.commands.registerTextEditorCommand('extension.cssrem', textEditor => {
        process.modifyDocument(textEditor, ingoresViaCommand, 'pxToRem');
    }), vscode_1.commands.registerTextEditorCommand('extension.cssrem.rem-to-px', textEditor => {
        process.modifyDocument(textEditor, ingoresViaCommand, 'remToPx');
    }), vscode_1.commands.registerTextEditorCommand('extension.cssrem.rem-switch-px', textEditor => {
        process.modifyDocument(textEditor, ingoresViaCommand, 'pxSwitchRem');
    }));
    if (config_1.cog.vw) {
        context.subscriptions.push(vscode_1.commands.registerTextEditorCommand('extension.cssrem.px-to-vw', textEditor => {
            process.modifyDocument(textEditor, ingoresViaCommand, 'pxToVw');
        }), vscode_1.commands.registerTextEditorCommand('extension.cssrem.vw-to-px', textEditor => {
            process.modifyDocument(textEditor, ingoresViaCommand, 'vwToPx');
        }), vscode_1.commands.registerTextEditorCommand('extension.cssrem.vw-switch-px', textEditor => {
            process.modifyDocument(textEditor, ingoresViaCommand, 'vwSwitchPx');
        }));
    }
    if (config_1.cog.wxss) {
        context.subscriptions.push(vscode_1.commands.registerTextEditorCommand('extension.cssrem.px-to-rpx', textEditor => {
            process.modifyDocument(textEditor, ingoresViaCommand, 'pxToRpx');
        }), vscode_1.commands.registerTextEditorCommand('extension.cssrem.rpx-to-px', textEditor => {
            process.modifyDocument(textEditor, ingoresViaCommand, 'rpxToPx');
        }), vscode_1.commands.registerTextEditorCommand('extension.cssrem.rpx-switch-px', textEditor => {
            process.modifyDocument(textEditor, ingoresViaCommand, 'rpxSwitchPx');
        }));
    }
    if (config_1.cog.currentLine !== 'disabled')
        context.subscriptions.push(new line_annotation_1.LineAnnotation());
    // .cssrem watch
    const cssremConfigWatcher = vscode_1.workspace.createFileSystemWatcher(`**/${config_1.cssremConfigFileName}`);
    cssremConfigWatcher.onDidChange(() => (0, config_1.loadConfig)());
    cssremConfigWatcher.onDidCreate(() => (0, config_1.loadConfig)());
    cssremConfigWatcher.onDidDelete(() => (0, config_1.loadConfig)());
    context.subscriptions.push(cssremConfigWatcher);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    //
}
exports.deactivate = deactivate;

//# sourceMappingURL=extension.js.map
