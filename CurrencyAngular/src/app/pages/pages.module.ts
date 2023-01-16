import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PagesRoutes,
  PAGES_ROUTES_TITLES,
} from '../shared/enums/pages-routing.enum';
import { SharedModule } from '../shared/shared-module.module';
import { HomePageComponent } from './home-page/home-page.component';

const ROUTES: Routes = [
  {
    path: PagesRoutes.Empty,
    redirectTo: PagesRoutes.Home,
    pathMatch: 'full',
  },
  {
    path: PagesRoutes.Home,
    component: HomePageComponent,
    title: PAGES_ROUTES_TITLES.home,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [RouterModule.forChild(ROUTES), SharedModule],
})
export class PagesModule {}
