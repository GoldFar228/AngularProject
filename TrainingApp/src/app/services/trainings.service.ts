import { Injectable } from '@angular/core';
import { Training } from '../models/Training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private trainings: Training[] = 
  [{
    header: "Increase your bench press",
    img: "assets/man-barbell-bench-press.png",
    tag1: "Get stronger",
    tag1Img: "assets/get-stronger.jpg",
    tag2: "30 minutes",
    tag2Img: "assets/30-mins.jpg",
    des: false
  },
  {
    header: "Chest growth in the gym",
    img: "assets/chest-growth.jpg",
    tag1: "Gain weight",
    tag1Img: "assets/gain-weight.jpg",
    tag2: "30 minutes",
    tag2Img: "assets/30-mins.jpg",
    des: false
  }];

  constructor() { }

  getData(): Training[] {
    return this.trainings;
  }
  addItem(newTraining: Training): void{
    this.trainings.push(newTraining);
  }
  getTrainingByHeader(header: string): Training{
    return this.trainings.find(t => t.header === header)
  }
}