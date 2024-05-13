import { Component, OnInit, ViewChild} from '@angular/core';
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { Training } from '../../models/Training.model';
import { TrainingService } from '../../services/trainings.service';
import { DescriptionComponent } from './description/description.component';
import { IndexMassComponent } from './index-mass/index-mass.component';
import { IndexMassPipe } from "../../Pipes/im.pipe";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent, DescriptionComponent, IndexMassComponent, IndexMassPipe, RouterOutlet, RouterLink]
})
export class TrainingsComponent implements OnInit{

  trainings: Training[];

  showBlock = false;

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
