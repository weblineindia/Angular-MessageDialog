import { ɵɵdefineInjectable, Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MessageDialogService {
    constructor() { }
}
MessageDialogService.ɵprov = ɵɵdefineInjectable({ factory: function MessageDialogService_Factory() { return new MessageDialogService(); }, token: MessageDialogService, providedIn: "root" });
MessageDialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MessageDialogService.ctorParameters = () => [];

class MessageDialogComponent {
    constructor() {
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
        this.cancle = new EventEmitter();
        this.buttonClick = new EventEmitter();
    }
    cancel() {
        this.cancle.emit();
    }
    onClickButtons(value) {
        this.buttonClick.emit(value);
    }
}
MessageDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-message-dialog',
                template: "<p-dialog\n  [(visible)]=\"visible\"\n  [modal]=\"true\"\n  [style]=\"style\"\n  [baseZIndex]=\"baseZIndex\"\n  [draggable]=\"draggable\"\n  [resizable]=\"resizable\"\n  [id]=\"id\"\n  [showHeader]=\"showHeader\"\n  [closable]=\"closable\"\n  [header]=\"headerContent\"\n  [closeOnEscape]=\"closeOnEscape\"\n  (onHide)=\"cancel()\"\n>\n\n  <p>\n   {{content}}\n  </p>\n  <p-footer>\n    <div\n      *ngFor=\"let button of buttons; let i = index\"\n    \n      [ngClass]=\"{\n        'popup-btn': true,\n        'btn-class-1': buttons.length === 1,\n        'btn-class-2': buttons.length === 2,\n        'btn-class-3': buttons.length === 3 \n      }\"\n    >\n      <button class=\"pointer\" (click)=\"onClickButtons(button)\">{{ button.title }}</button>\n    </div>\n\n\n  </p-footer>\n</p-dialog>\n",
                styles: [".popup-btn.btn-class-3.ng-star-inserted{float:left;text-align:center;width:31%}.popup-btn.btn-class-2.ng-star-inserted{float:left;text-align:center;width:50%}.popup-btn.btn-class-1.ng-star-inserted{text-align:center;width:100%}"]
            },] }
];
MessageDialogComponent.propDecorators = {
    id: [{ type: Input }],
    visible: [{ type: Input }],
    content: [{ type: Input }],
    buttons: [{ type: Input }],
    showHeader: [{ type: Input }],
    headerContent: [{ type: Input }],
    closable: [{ type: Input }],
    noOfButton: [{ type: Input }],
    index: [{ type: Input }],
    draggable: [{ type: Input }],
    resizable: [{ type: Input }],
    baseZIndex: [{ type: Input }],
    style: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    cancle: [{ type: Output }],
    buttonClick: [{ type: Output }]
};

class MessageDialogModule {
}
MessageDialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MessageDialogComponent],
                imports: [
                    BrowserAnimationsModule,
                    DialogModule
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

export { MessageDialogComponent, MessageDialogModule, MessageDialogService };
//# sourceMappingURL=angular-weblineindia-message-dialog-box.js.map
