import { Component, OnInit } from '@angular/core';
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { Training } from '../../models/Training.model';
import { TrainingService } from '../../services/trainings.service';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent]
})
export class TrainingsComponent implements OnInit{

  trainings: Training[];

  constructor(private trainingService: TrainingService){ }

  public searchString: string = '';

  ngOnInit(): void {
    this.trainings = this.trainingService.getData();
  }

  setSearchString(e: string): void{
    this.searchString = e;
    console.log(this.searchString);
  }
}
