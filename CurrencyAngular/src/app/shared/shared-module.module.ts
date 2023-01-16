import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularBaseModule } from './angular-base.module';

const MODULES = [AngularBaseModule, HttpClientModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
