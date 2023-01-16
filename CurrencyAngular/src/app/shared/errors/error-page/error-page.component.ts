import { Component, Input } from '@angular/core';
import { AngularBaseModule } from '../../angular-base.module';
import { PagesRoutes } from '../../enums/_index';
import { IErrorPage } from '../../models/_index';

@Component({
  selector: 'hnr-error-page',
  standalone: true,
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  imports: [AngularBaseModule],
})
export class ErrorPageComponent implements IErrorPage {
  @Input() errorCode!: number;
  @Input() errorText: string = '';

  readonly homeTarget: string = `/${PagesRoutes.TmpError}`;
}
