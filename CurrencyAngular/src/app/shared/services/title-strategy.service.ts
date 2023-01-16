import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SITE_TITLE } from '../consts';

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const routeTitle: string | undefined = this.buildTitle(routerState);
    const siteTitle: string = routeTitle
      ? `${SITE_TITLE} - ${routeTitle}`
      : SITE_TITLE;

    this.title.setTitle(siteTitle);
  }
}
