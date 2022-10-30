import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanSiNoPipe } from './pipes/booleanSiNo.pipe';
import { MaterialModule } from './modules/material.module';


@NgModule({
  declarations: [
    BooleanSiNoPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    BooleanSiNoPipe
  ]
})
export class SharedModule { }
