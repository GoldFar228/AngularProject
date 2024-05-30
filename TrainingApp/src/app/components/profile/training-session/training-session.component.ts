import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { TrainingSessionService } from '../../../services/trainingSession.service';
import { TrainingSession } from '../../../models/TrainingSession.model';
import { StoredTrainingSession } from '../../../models/StoredTrainingSession.model';

@Component({
  selector: 'app-training-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-session.component.html',
  styleUrl: './training-session.component.css'
})
export class TrainingSessionComponent{
  @Input()
  styleTraining: boolean;

  @Input()
  setsQuantity: number;

  trainingSession: TrainingSession;
  trainingSessions: TrainingSession[];//возможно не нужно
  trainingSessionService = inject(TrainingSessionService);
  storedTrainingSession = new StoredTrainingSession;

  inputValue: number;
  generatedInputs: number[] = [];
  outputString: string = '';

  generateSession() {
    for (let s = 0; s < this.setsQuantity; s++) {
      this.generatedInputs.push(s);
      console.log(this.generatedInputs, " ", s)
    }
  }
  saveSession() {
    for (let gI = 0; gI < this.generatedInputs.length; gI++) {
      this.outputString += "";
    }
  }
  @ViewChildren('reps')
  reps: QueryList<ElementRef>;
  @ViewChildren('weights')
  weights: QueryList<ElementRef>;
  @ViewChild('exerciseName')
  exerciseName;

  trainingsSessionsUserHasJSON?: string = localStorage.getItem('userTrainingSession');

  trainingsSessionsUserHas: TrainingSession[] = JSON.parse(this.trainingsSessionsUserHasJSON);

  @Input()
  sessionId: number;

  getData() {
    let trainingSession = this.trainingSessionService.createNewObject()
    trainingSession.name = this.exerciseName.nativeElement.value
    trainingSession.reps = [];
    trainingSession.sessionId = this.sessionId;
    if(this.styleTraining === true){
      trainingSession.weight = [];
      this.weights.forEach(element =>{
        trainingSession.weight.push(element.nativeElement.value);
      })      
    }
    this.reps.forEach(element => {
      trainingSession.reps.push(element.nativeElement.value);
    })
    this.trainingSessionService.addItem(trainingSession);
    // localStorage.setItem('userTrainingSession', JSON.stringify(trainingSession));
    // console.log(localStorage.getItem('userTrainingSession'));
  }
}
