import { NgModule } from '@angular/core';
import { MessageDialogComponent } from './message-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export class MessageDialogModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVzc2FnZS1kaWFsb2cvc3JjL2xpYi9tZXNzYWdlLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFXN0UsTUFBTSxPQUFPLG1CQUFtQjs7O1lBUi9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdEMsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWFsb2dNb2R1bGV9IGZyb20gJ3ByaW1lbmcvZGlhbG9nJztcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVzc2FnZURpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBEaWFsb2dNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW01lc3NhZ2VEaWFsb2dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEaWFsb2dNb2R1bGUgeyB9XG4iXX0=