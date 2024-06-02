import { Injectable } from '@angular/core';
import { TrainingSession } from '../models/TrainingSession.model';
import { BehaviorSubject, take } from 'rxjs';
import { StoredTrainingSession } from '../models/StoredTrainingSession.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private trainingSessions = new BehaviorSubject<TrainingSession[]>([]);
  private storedTrainingSessions = new BehaviorSubject<StoredTrainingSession[]>([]);

  public addTrainingSessionToStoredSession(newTrainingSession: StoredTrainingSession): void {
    console.log(newTrainingSession)
    const storedSessions = JSON.parse(localStorage.getItem('userTrainingSession')) || [];
    this.storedTrainingSessions = new BehaviorSubject<StoredTrainingSession[]>(storedSessions);
    this.storedTrainingSessions.pipe(take(1)).subscribe(value => {
      const storedSessions = value;
      let updatedStoredSession = [...value, newTrainingSession];
      this.storedTrainingSessions.next(updatedStoredSession);
      localStorage.setItem('userTrainingSession', JSON.stringify(updatedStoredSession));
    });
  }

  public removeAllItems(){
    localStorage.removeItem('');
    localStorage.removeItem('userTrainingSession')
    this.trainingSessions.next(null);
    this.storedTrainingSessions.next(null);
  }
  public removeItem(session: StoredTrainingSession){
  
    const storedData = JSON.parse(localStorage.getItem('userTrainingSession'));
    const objectIdToDelete = session.id;
    const indexToDelete = storedData.findIndex(obj => obj.id === objectIdToDelete);

    if (indexToDelete !== -1) {
      storedData.splice(indexToDelete, 1);
      localStorage.setItem('userTrainingSession', JSON.stringify(storedData));
    } else {
      console.log('Объект с указанным идентификатором не найден.');
    }
  }
}