import { Injectable } from '@angular/core';
import { TrainingSession } from '../models/TrainingSession.model';
import { BehaviorSubject, take } from 'rxjs';
import { StoredTrainingSession } from '../models/StoredTrainingSession.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  createNewObject(): TrainingSession {
    return new TrainingSession();
  }
  private _trainingSessions = new BehaviorSubject<TrainingSession[]>([]);

  constructor() {
    const storedTrainings = localStorage.getItem('userTrainingSession');
    if (storedTrainings) {
      this._trainingSessions.next(JSON.parse(storedTrainings));
    }
  }

  public getData() {
    return this._trainingSessions.asObservable();
  }


  public addItem(newTraining: TrainingSession): void {
    const subscription = this._trainingSessions.pipe(take(1)).subscribe(value => {

      const currentTrainings = this._trainingSessions.getValue() || [];
      const updatedTrainings = [...currentTrainings, newTraining];
      this._trainingSessions.next(updatedTrainings);
      this.saveDataToLocalStorage(updatedTrainings);
    })
  }
  private saveDataToLocalStorage(trainingSessions: TrainingSession[]) {
    localStorage.setItem('', JSON.stringify(trainingSessions));
  }
}