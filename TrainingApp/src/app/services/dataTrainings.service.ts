import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';
import { BehaviorSubject, Subject, take, takeUntil } from 'rxjs';

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
    const subscription = this.trainings.pipe(take(1)).subscribe(value => {
      const currentTrainings = this.trainings.getValue();
      if (currentTrainings.some(training => training.header === newTraining.header)) {
        console.log('Training already exists');
      } else {
        const updatedTrainings = [...currentTrainings, newTraining];
        this.trainings.next(updatedTrainings);
        this.saveDataToLocalStorage(updatedTrainings);
      }

    })
  }
  private saveDataToLocalStorage(trainings: Training[]) {
    console.log(this.trainings.getValue().toString() + " " + trainings)

    localStorage.setItem('trainingsUserChose', JSON.stringify(trainings));

  }
}