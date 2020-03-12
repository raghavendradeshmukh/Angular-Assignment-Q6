import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule,MatSortModule, MatPaginatorModule,MatButtonModule} from '@angular/material';

const MaterialComponents=[  
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],exports:[MaterialComponents]
})
export class MaterialModule { }
