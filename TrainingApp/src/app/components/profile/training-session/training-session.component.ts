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
  public styleTraining: boolean;


  public trainingSession: TrainingSession;
  public trainingSessionService = inject(TrainingSessionService);
  public storedTrainingSession = new StoredTrainingSession;

  public inputValue: number;
  public generatedInputs: number[] = [];
  public outputString: string = '';


  @ViewChildren('reps')
  public reps: QueryList<ElementRef>;
  @ViewChildren('weights')
  public weights: QueryList<ElementRef>;
  @ViewChild('exerciseName')
  public exerciseName;

  public trainingsSessionsUserHasJSON?: string = localStorage.getItem('userTrainingSession');

  public trainingsSessionsUserHas: TrainingSession[] = JSON.parse(this.trainingsSessionsUserHasJSON);

  @Input()
  sessionId: number;

  public generateSession(setsQuantity: number):void {
    for (let s = 0; s < setsQuantity; s++) {
      this.generatedInputs.push(s);
    }
  }

  public getData(): void {
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

  public generateInputs(): void {
    this.inputs.push(this.inputs.length + 1);
  }
}
