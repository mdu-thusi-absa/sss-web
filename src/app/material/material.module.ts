import { NgModule } from '@angular/core';
import {MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
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
