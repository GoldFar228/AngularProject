import { Injectable } from '@angular/core';
import { TrainingSession } from '../models/training-session.model';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { StoredTrainingSession } from '../models/stored-training-session.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _trainingSessions = new BehaviorSubject<TrainingSession[]>(JSON.parse(localStorage.getItem('userTrainingSession')) || []);
  private _storedTrainingSessions = new BehaviorSubject<StoredTrainingSession[]>(JSON.parse(localStorage.getItem('userTrainingSession')) || []);

  public get getStoredTrainingSessions(): Observable<StoredTrainingSession[]>{
    return this._storedTrainingSessions.asObservable();
  };

  public addTrainingSessionToStoredSession(newTrainingSession: StoredTrainingSession): void {
    this._storedTrainingSessions.pipe(take(1)).subscribe(value => {
      let updatedStoredSession = [...value, newTrainingSession];
      this._storedTrainingSessions.next(updatedStoredSession);
      localStorage.setItem('userTrainingSession', JSON.stringify(updatedStoredSession));
    });
  }

  public removeAllItems(){
    localStorage.removeItem('');
    localStorage.removeItem('userTrainingSession')
    this._trainingSessions.next(null);
    this._storedTrainingSessions.next(null);
  }
  public removeItem(session: StoredTrainingSession): void{
  
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