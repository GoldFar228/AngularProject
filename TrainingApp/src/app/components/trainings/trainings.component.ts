import { Component } from '@angular/core';
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { trainingsMock } from '../../mocks/trainings-mocks/trainings.mock';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent]
})
export class TrainingsComponent {
  public trainings = trainingsMock;

  public searchString: string = '';

  setSearchString(e: string): void{
    this.searchString = e;
    console.log(this.searchString);
  }
}
