import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    BooleanSiNoPipe,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
