import { Component } from '@angular/core';
import { TrainingItemComponent } from "./training-item/training-item.component";
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "./filters/filters.component";
import { DescriptionComponent } from './description/description.component';
import { Console } from 'console';

@Component({
    selector: 'app-trainings',
    standalone: true,
    templateUrl: './trainings.component.html',
    styleUrl: './trainings.component.css',
    imports: [TrainingItemComponent, CommonModule, FiltersComponent, DescriptionComponent]
})
export class TrainingsComponent {
  trainings: { header: string, img: string, tag1: string, tag1Img: string, tag2: string, tag2Img: string, des: boolean}[] = 
  [{
    header: "Increase your bench press",
    img: "../../../../assets/man-barbell-bench-press.png",
    tag1: "Get stronger",
    tag1Img: "../../../../assets/get-stronger.jpg",
    tag2: "30 minutes",
    tag2Img: "../../../../assets/30-mins.jpg",
    des: false
  },
  {
    header: "Chest growth in the gym",
    img: "../../../../assets/chest-growth.jpg",
    tag1: "Gain weight",
    tag1Img: "../../../../assets/gain-weight.jpg",
    tag2: "30 minutes",
    tag2Img: "../../../../assets/30-mins.jpg",
    des: false
  }];
  public searchString: string = '';

  setSearchString(e: string): void{
    this.searchString = e;
    console.log(this.searchString)
  }
  public flag: boolean = false;
  public handler(training): void{
    training.des = !training.des
  }
}
