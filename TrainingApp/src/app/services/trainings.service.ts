import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private _trainings: Training[] = 
  [{
    header: "Increase your bench press",
    img: "assets/man-barbell-bench-press.png",
    tag1: "Get stronger",
    tag1Img: "assets/get-stronger.jpg",
    tag2: "30 minutes",
    tag2Img: "assets/30-mins.jpg",
    des: false,
    sequence_number: 0
  },
  {
    header: "Chest growth in the gym",
    img: "assets/chest-growth.jpg",
    tag1: "Gain weight",
    tag1Img: "assets/gain-weight.jpg",
    tag2: "30 minutes",
    tag2Img: "assets/30-mins.jpg",
    des: false,
    sequence_number: 1
  }];

  constructor() { 
    
  }

  getData(): Training[] {
    return this._trainings;
  }
  addItem(newTraining: Training): void{
    this._trainings.push(newTraining);
  }
  getTrainingByHeader(header: string): Training{
    return this._trainings.find(t => t.header === header)
  }
}