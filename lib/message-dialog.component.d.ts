import { EventEmitter } from '@angular/core';
export declare class MessageDialogComponent {
    id: String;
    visible: Boolean;
    content: String;
    buttons: any;
    showHeader: Boolean;
    headerContent: String;
    closable: Boolean;
    noOfButton: Number;
    index: Number;
    draggable: Boolean;
    resizable: Boolean;
    baseZIndex: Number;
    style: Object;
    closeOnEscape: Boolean;
    cancle: EventEmitter<any>;
    buttonClick: EventEmitter<any>;
    cancel(): void;
    onClickButtons(value: any): void;
}
