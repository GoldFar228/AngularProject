<<<<<<< Updated upstream

import { Component, EventEmitter, HostListener, InjectionToken, OnInit, Output, inject } from '@angular/core';
=======
import { Component, OnInit, inject } from '@angular/core';
>>>>>>> Stashed changes
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { Training } from '../../models/training.model';
import { TrainingService } from '../../services/trainings.service';
import { DescriptionComponent } from './description/description.component';
import { IndexMassComponent } from './index-mass/index-mass.component';
import { MY_TOKEN, myTokenFactory } from '../../functions/dependecy-injection.function';

import { IndexMassPipe } from "../../Pipes/im.pipe";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent, DescriptionComponent, IndexMassComponent],
    providers:[
      {provide: MY_TOKEN, useFactory: myTokenFactory}
    ]
})


export class TrainingsComponent implements OnInit{

  public trainings: Training[];
  public chosenTraining: Training;
  public isVisible: boolean;
  private _trainingService = inject(TrainingService);
  
  public myToken: string = inject(MY_TOKEN)

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
  @ViewChild(IndexMassComponent) infoComponent: IndexMassComponent | undefined;

  recomend(): string {
    if(this.infoComponent?.index.weight/(Math.pow(this.infoComponent?.index.height/100, 2)) <= 23){
      return "gain weight"
    }
    return "loose weight"
  }
  show(): void{
    this.showBlock = !this.showBlock
  }
}
