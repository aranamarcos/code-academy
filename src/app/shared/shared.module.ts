import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanSiNoPipe } from './pipes/booleanSiNo.pipe';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BooleanSiNoPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    BooleanSiNoPipe,
    HttpClientModule
  ]
})
export class SharedModule { }
