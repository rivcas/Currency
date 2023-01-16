import { Component } from '@angular/core';
import { ErrorCode } from '../enums/_index';
import { IErrorPage } from '../models/_index';
import { ErrorPageComponent } from './_index';

@Component({
  selector: 'hnr-page-not-found',
  standalone: true,
  template: `<hnr-error-page
    [errorCode]="errorCode"
    [errorText]="errorText"
  ></hnr-error-page>`,
  imports: [ErrorPageComponent],
})
export class PageNotFoundComponent implements IErrorPage {
  errorCode: number = ErrorCode.NotFound;
  errorText: string = 'אופס, הדף לא נמצא...';
}
