import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../consts';
import { MessageCode } from '../enums/message-code.enum';
import { IApiResponse, IGetCurrenciesRes } from '../models/_index';
import { ConfigService } from './_index';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private configSv: ConfigService
  ) {}

  getCurrencies(): Observable<IGetCurrenciesRes> {
    return this.httpClient.get<IGetCurrenciesRes>(
      this._completeUrl(API_URLS.GET_CURRENCIES)
    );
  }

  isSuccessService(res: IApiResponse): boolean {
    return !res.isError && res.messageCode === MessageCode.Success;
  }

  private _completeUrl(url: string) {
    return `${this.configSv.config.baseUrl}${url}`;
  }
}
