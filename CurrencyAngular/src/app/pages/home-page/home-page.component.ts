import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MessageCode } from 'src/app/shared/enums/message-code.enum';
import { PagesRoutes } from 'src/app/shared/enums/pages-routing.enum';
import {
  IApiResponse,
  ICurrency,
} from 'src/app/shared/models/response.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@UntilDestroy()
@Component({
  selector: 'hnr-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  currencies: ICurrency[] = [];

  constructor(private apiSv: ApiService, private router: Router) {}

  ngOnInit(): void {
    this._getCurrencies();
  }

  private _getCurrencies() {
    this.apiSv
      .getCurrencies()
      .pipe(untilDestroyed(this))
      .subscribe((res: IApiResponse<ICurrency[]>) => {
        if (this.apiSv.isSuccessService(res)) {
          this.currencies = res.data?.filter(
            (c: ICurrency) => c.currentChange < 0
          );
        } else if (res.messageCode === MessageCode.NoResult) {
          alert('Currencies Not Found');
        } else {
          this.router.navigateByUrl(`/${PagesRoutes.TmpError}`);
        }
      });
  }
}
