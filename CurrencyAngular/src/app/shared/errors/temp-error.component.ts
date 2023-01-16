import { Component } from '@angular/core';
import { ErrorCode } from '../enums/_index';
import { IErrorPage } from '../models/_index';
import { ErrorPageComponent } from './_index';

@Component({
  selector: 'hnr-temp-error',
  standalone: true,
  template: `<hnr-error-page
    [errorCode]="errorCode"
    [errorText]="errorText"
  ></hnr-error-page>`,
  imports: [ErrorPageComponent],
})
export class TempErrorComponent implements IErrorPage {
  errorCode: number = ErrorCode.Failure;
  errorText: string = 'אופס, משהו השתבש...';
}
