import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { TrainingSessionService } from '../../../services/trainingSession.service';
import { TrainingSession } from '../../../models/TrainingSession.model';
import { StoredTrainingSession } from '../../../models/StoredTrainingSession.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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


  trainingSession: TrainingSession;
  trainingSessionService = inject(TrainingSessionService);
  storedTrainingSession = new StoredTrainingSession;

  inputValue: number;
  generatedInputs: number[] = [];
  outputString: string = '';


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

  generateSession(setsQuantity) {
    for (let s = 0; s < setsQuantity; s++) {
      this.generatedInputs.push(s);
    }
  }

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
  }
  inputs = [];

  generateInputs() {
    this.inputs.push(this.inputs.length + 1);
  }
}
