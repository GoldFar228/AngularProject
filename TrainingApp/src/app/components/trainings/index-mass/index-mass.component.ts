import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PipesModule } from '../../../Pipes/ngPipes';
export class Index{
  constructor(public weight: number,
    public height: number
  )
  {}
}
@Component({
  selector: 'app-index-mass',
  standalone: true,
  imports: [FormsModule, PipesModule],
  templateUrl: './index-mass.component.html',
  styleUrl: './index-mass.component.css'
})

export class IndexMassComponent {
  number: number = 0;
  index = new Index(0,0);
  logIndex(weight: NgModel, height: NgModel){
    this.index = new Index(weight.model, height.model)
  }
}
