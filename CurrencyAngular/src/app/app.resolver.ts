import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, mergeMap, tap } from 'rxjs';
import { IAppConfig, IConfig } from './shared/models/_index';
import { ConfigService } from './shared/services/_index';

@Injectable({
  providedIn: 'root',
})
export class AppResolverService implements Resolve<IConfig | null> {
  constructor(private configSv: ConfigService) {}

  resolve(): Observable<IConfig | null> {
    return this.configSv.loadAppConfig().pipe(
      mergeMap((ac: IAppConfig) => {
        return this.configSv.loadConfig(ac.configMode);
      }),
      tap((config: IConfig) => {
        this.configSv.config = config;
      })
    );
  }
}
