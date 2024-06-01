import { Component, EventEmitter, HostListener, OnInit, Output, inject } from '@angular/core';
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { Training } from '../../models/Training.model';
import { TrainingService } from '../../services/trainings.service';
import { DescriptionComponent } from './description/description.component';
import { IndexMassComponent } from './index-mass/index-mass.component';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent, DescriptionComponent, IndexMassComponent]
})
export class TrainingsComponent implements OnInit{

  public trainings: Training[];
  public chosenTraining: Training;
  public isVisible: boolean;
  private _trainingService = inject(TrainingService);

  public searchString: string = '';

  ngOnInit(): void {
    this.trainings = this._trainingService.getData();
  }

  public setSearchString(e: string): void{
    this.searchString = e;
    console.log(this.searchString);
  }
  public handler(training: Training): void{
    this.chosenTraining = training;
    this.chosenTraining.des = true;
  }
  public setIsVisible(e: boolean): void{
    this.chosenTraining.des = e
  }
}
