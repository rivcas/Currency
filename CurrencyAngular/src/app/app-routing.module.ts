import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { AppResolverService } from './app.resolver';
import { PagesRoutes, PAGES_ROUTES_TITLES } from './shared/enums/_index';
import { PageTitleStrategy } from './shared/services/_index';

const routes: Routes = [
  {
    path: PagesRoutes.Empty,
    resolve: [AppResolverService],
    children: [
      {
        path: PagesRoutes.Empty,
        redirectTo: PagesRoutes.Home,
        pathMatch: 'full',
      },
      {
        path: PagesRoutes.Empty,
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: PagesRoutes.TmpError,
        loadComponent: () =>
          import('./shared/errors/temp-error.component').then(
            (c) => c.TempErrorComponent
          ),
        title: PAGES_ROUTES_TITLES.tmperror,
      },
      {
        path: PagesRoutes.NotFound,
        loadComponent: () =>
          import('./shared/errors/page-not-found.component').then(
            (c) => c.PageNotFoundComponent
          ),
        title: PAGES_ROUTES_TITLES[PagesRoutes.NotFound],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: TitleStrategy, useClass: PageTitleStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
