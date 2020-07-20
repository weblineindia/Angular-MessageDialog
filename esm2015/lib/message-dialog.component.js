import { Component, Input, Output, EventEmitter } from '@angular/core';
export class MessageDialogComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVzc2FnZS1kaWFsb2cvc3JjL2xpYi9tZXNzYWdlLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTVcsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLFVBQUssR0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUM5QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVNyRSxDQUFDO0lBUEMsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsMnlCQUE4Qzs7YUFFL0M7OztpQkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7cUJBQ0wsTUFBTTswQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW1lc3NhZ2UtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1kaWFsb2cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEaWFsb2dDb21wb25lbnQgIHtcbiAgQElucHV0KCkgaWQ6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB2aXNpYmxlOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBidXR0b25zOiBhbnkgPSBbXTtcbiAgQElucHV0KCkgc2hvd0hlYWRlcjogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoZWFkZXJDb250ZW50OiBTdHJpbmcgPSAnJztcbiAgQElucHV0KCkgY2xvc2FibGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbm9PZkJ1dHRvbjogTnVtYmVyID0gMDtcbiAgQElucHV0KCkgaW5kZXg6IE51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZXNpemFibGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYmFzZVpJbmRleDogTnVtYmVyID0gMTAwMDtcbiAgQElucHV0KCkgc3R5bGU6IE9iamVjdCA9IHsgd2lkdGg6ICc1MHZ3JyB9O1xuICBASW5wdXQoKSBjbG9zZU9uRXNjYXBlOiBCb29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjYW5jbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBidXR0b25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5jYW5jbGUuZW1pdCgpO1xuICB9XG4gIG9uQ2xpY2tCdXR0b25zKHZhbHVlKSB7XG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KHZhbHVlKTtcbiAgfVxuXG59XG4iXX0=