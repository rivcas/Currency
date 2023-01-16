import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const MODULES = [CommonModule, RouterModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class AngularBaseModule {}
