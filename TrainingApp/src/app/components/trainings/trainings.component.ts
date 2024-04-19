import { Component, OnInit } from '@angular/core';
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { Training } from '../../models/Training.model';
import { TrainingService } from '../../services/trainings.service';
import { DescriptionComponent } from './description/description.component';
import { Console } from 'console';
import { IndexMassComponent } from './index-mass/index-mass.component';
import { IndexMassPipe } from '../../Pipes/im.pipe';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent, DescriptionComponent, IndexMassComponent]
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
  handler(training): void{
    training.des = !training.des
  }
}
