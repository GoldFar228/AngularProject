import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PipesModule } from '../../../Pipes/ngPipes';
import { Index } from '../../../models/indexMass.model';
@Component({
  selector: 'app-index-mass',
  standalone: true,
  imports: [FormsModule, PipesModule],
  templateUrl: './index-mass.component.html',
  styleUrl: './index-mass.component.css'
})

export class IndexMassComponent {
  number: number = 0;
  index: Index = {weight: NaN, height: NaN}
  logIndex(weight: NgModel, height: NgModel){
    this.index = {weight: weight.model, height: height.model}
  }
}
