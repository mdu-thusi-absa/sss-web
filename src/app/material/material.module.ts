import { NgModule } from '@angular/core';
import {MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox'

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
