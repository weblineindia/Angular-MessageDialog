(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('primeng/dialog'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('angular-weblineindia-message-dialog-box', ['exports', '@angular/core', 'primeng/dialog', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory(global['angular-weblineindia-message-dialog-box'] = {}, global.ng.core, global.dialog, global.ng.platformBrowser.animations));
}(this, (function (exports, i0, dialog, animations) { 'use strict';

    var MessageDialogService = /** @class */ (function () {
        function MessageDialogService() {
        }
        return MessageDialogService;
    }());
    MessageDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MessageDialogService_Factory() { return new MessageDialogService(); }, token: MessageDialogService, providedIn: "root" });
    MessageDialogService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MessageDialogService.ctorParameters = function () { return []; };

    var MessageDialogComponent = /** @class */ (function () {
        function MessageDialogComponent() {
            this.id = '';
            this.visible = false;
            this.content = '';
            this.buttons = [];
            this.showHeader = false;
            this.headerContent = '';
            this.closable = false;
            this.noOfButton = 0;
            this.index = 0;
            this.draggable = false;
            this.resizable = false;
            this.baseZIndex = 1000;
            this.style = { width: '50vw' };
            this.closeOnEscape = false;
            this.cancle = new i0.EventEmitter();
            this.buttonClick = new i0.EventEmitter();
        }
        MessageDialogComponent.prototype.cancel = function () {
            this.cancle.emit();
        };
        MessageDialogComponent.prototype.onClickButtons = function (value) {
            this.buttonClick.emit(value);
        };
        return MessageDialogComponent;
    }());
    MessageDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-message-dialog',
                    template: "<p-dialog\n  [(visible)]=\"visible\"\n  [modal]=\"true\"\n  [style]=\"style\"\n  [baseZIndex]=\"baseZIndex\"\n  [draggable]=\"draggable\"\n  [resizable]=\"resizable\"\n  [id]=\"id\"\n  [showHeader]=\"showHeader\"\n  [closable]=\"closable\"\n  [header]=\"headerContent\"\n  [closeOnEscape]=\"closeOnEscape\"\n  (onHide)=\"cancel()\"\n>\n\n  <p>\n   {{content}}\n  </p>\n  <p-footer>\n    <div\n      *ngFor=\"let button of buttons; let i = index\"\n    \n      [ngClass]=\"{\n        'popup-btn': true,\n        'btn-class-1': buttons.length === 1,\n        'btn-class-2': buttons.length === 2,\n        'btn-class-3': buttons.length === 3 \n      }\"\n    >\n      <button class=\"pointer\" (click)=\"onClickButtons(button)\">{{ button.title }}</button>\n    </div>\n\n\n  </p-footer>\n</p-dialog>\n",
                    styles: [".popup-btn.btn-class-3.ng-star-inserted{float:left;text-align:center;width:31%}.popup-btn.btn-class-2.ng-star-inserted{float:left;text-align:center;width:50%}.popup-btn.btn-class-1.ng-star-inserted{text-align:center;width:100%}"]
                },] }
    ];
    MessageDialogComponent.propDecorators = {
        id: [{ type: i0.Input }],
        visible: [{ type: i0.Input }],
        content: [{ type: i0.Input }],
        buttons: [{ type: i0.Input }],
        showHeader: [{ type: i0.Input }],
        headerContent: [{ type: i0.Input }],
        closable: [{ type: i0.Input }],
        noOfButton: [{ type: i0.Input }],
        index: [{ type: i0.Input }],
        draggable: [{ type: i0.Input }],
        resizable: [{ type: i0.Input }],
        baseZIndex: [{ type: i0.Input }],
        style: [{ type: i0.Input }],
        closeOnEscape: [{ type: i0.Input }],
        cancle: [{ type: i0.Output }],
        buttonClick: [{ type: i0.Output }]
    };

    var MessageDialogModule = /** @class */ (function () {
        function MessageDialogModule() {
        }
        return MessageDialogModule;
    }());
    MessageDialogModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [MessageDialogComponent],
                    imports: [
                        animations.BrowserAnimationsModule,
                        dialog.DialogModule
                    ],
                    exports: [MessageDialogComponent]
                },] }
    ];

    /*
     * Public API Surface of message-dialog
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MessageDialogComponent = MessageDialogComponent;
    exports.MessageDialogModule = MessageDialogModule;
    exports.MessageDialogService = MessageDialogService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-weblineindia-message-dialog-box.umd.js.map
