import { Injectable } from '@angular/core';
import { Training } from '../models/Training.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTrainingService {
  private trainings = new BehaviorSubject<Training[]>([]);

  constructor() {
    const storedTrainings = localStorage.getItem('trainingsUserChose');
    if (storedTrainings) {
      this.trainings.next(JSON.parse(storedTrainings));
    }
  }

  public getData() {
    return this.trainings.asObservable();
  }
  public addItem(newTraining: Training): void {
    const currentTrainings = this.trainings.getValue();
    const updatedTrainings = [...currentTrainings, newTraining];
    this.trainings.next(updatedTrainings);
    this.saveDataToLocalStorage(updatedTrainings);
  }
  private saveDataToLocalStorage(trainings: Training[]) {
    if (this.trainings.getValue() === trainings) {
      console.log("This training is already exist")
    }
    else {
      localStorage.setItem('trainingsUserChose', JSON.stringify(trainings));
    }

  }
}