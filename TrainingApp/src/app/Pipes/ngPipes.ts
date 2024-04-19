import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexMassPipe } from './im.pipe';

@NgModule({
  declarations: [IndexMassPipe],
  imports: [
    CommonModule
  ],
  exports: [IndexMassPipe]
})
export class PipesModule { }