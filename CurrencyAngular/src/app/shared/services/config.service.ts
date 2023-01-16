import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppConfig, IConfig } from '../models/_index';

const appConfigUrl: string = '/assets/config/app.config.json';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private httpClient: HttpClient) {}

  config!: IConfig;

  loadConfig(configMode: string): Observable<IConfig> {
    const url: string = `/assets/config/${configMode}.config.json`;
    return this.httpClient.get<IConfig>(url);
  }

  loadAppConfig(): Observable<IAppConfig> {
    return this.httpClient.get<IAppConfig>(appConfigUrl);
  }
}
