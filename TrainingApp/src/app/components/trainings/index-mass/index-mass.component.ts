import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IndexMassPipe } from '../../../Pipes/im.pipe';
import { Index } from '../../../models/indexMass.model';
@Component({
  selector: 'app-index-mass',
  standalone: true,
  imports: [FormsModule, IndexMassPipe],
  templateUrl: './index-mass.component.html',
  styleUrl: './index-mass.component.css'
})

export class IndexMassComponent {
  public number: number = 0;
  public index: Index = {weight: NaN, height: NaN}
  public logIndex(weight: NgModel, height: NgModel): void{
    this.index = {weight: weight.model, height: height.model}
  }
}
