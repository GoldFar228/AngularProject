import { Injectable } from '@angular/core';
import { Training } from '../models/Training.model';
import { TrainingSession } from '../models/TrainingSession.model';
import { BehaviorSubject, Subject, take } from 'rxjs';
import { StoredTrainingSession } from '../models/StoredTrainingSession.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {

  createNewObject(): TrainingSession {
    return new TrainingSession();
  }
  private trainingSessions = new BehaviorSubject<TrainingSession[]>([]);
  private storedTrainingSessions = new BehaviorSubject<StoredTrainingSession[]>([]);

  constructor() {
    const storedTrainings = localStorage.getItem('userTrainingSession');
    if (storedTrainings) {
      this.trainingSessions.next(JSON.parse(storedTrainings));
    }
  }

  public getData() {
    return this.trainingSessions.asObservable();
  }


  public addItem(newTraining: TrainingSession): void {
    // localStorage.removeItem('')
    // this.trainingSessions.next(null);
    console.log(this.trainingSessions, 'current training sessions')
    const subscription = this.trainingSessions.pipe(take(1)).subscribe(value => {
      console.log('Текущее значение:', value);

      const currentTrainings = this.trainingSessions.getValue();
      console.log('current training sessions', currentTrainings)
      const updatedTrainings = [...currentTrainings, newTraining];
      this.trainingSessions.next(updatedTrainings);
      this.saveDataToLocalStorage(updatedTrainings);
    })
  }
  private saveDataToLocalStorage(trainingSessions: TrainingSession[]) {
    localStorage.setItem('', JSON.stringify(trainingSessions));
  }

  public addTrainingSessionToStoredSession(storedSessionId: number, newTrainingSession: StoredTrainingSession): void {
    console.log(newTrainingSession)
    this.storedTrainingSessions.pipe(take(1)).subscribe(value => {
      // this.storedTrainingSessions.next(null);
      console.log('Я смог это сделать', value)
      const storedSessions = this.storedTrainingSessions.getValue();
      console.log('Я смог', storedSessions)
      let updatedStoredSession = [...storedSessions, newTrainingSession];
      console.log(updatedStoredSession)
      this.storedTrainingSessions.next(updatedStoredSession)
      // updatedStoredSession.push(newTrainingSession);
      // this.storedTrainingSessions.next(updatedStoredSession);
      localStorage.setItem('userTrainingSession', JSON.stringify(updatedStoredSession));

    });
  }
}