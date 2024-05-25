import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, inject } from '@angular/core';
import { Hash } from 'crypto';
import { TrainingDescription } from '../../../models/TrainingDescription.model';
import { DescriptionService } from '../../../services/description.service';
import { TrainingService } from '../../../services/trainings.service';
import { Training } from '../../../models/Training.model';
import { DataTrainingService } from '../../../services/dataTrainings.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnChanges {
  descriptionService = inject(DescriptionService);
  trainingService = inject(TrainingService);

  trainings: Training[] = this.trainingService.getData();
  descriptions: TrainingDescription[] = this.descriptionService.getData();

  @Input() name!: string;

  @Input() isVisible: boolean;
  @Output() isVisibleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  imgPath: string = '';

  ngOnChanges() {
    console.log(this.trainingService.getTrainingByHeader(this.name).img);
    this.imgPath = this.trainingService.getTrainingByHeader(this.name).img;
  }

  trainingsUserChoseJSON?: string = localStorage.getItem('trainingsUserChose');

  trainingsUserChose: Training[] = JSON.parse(this.trainingsUserChoseJSON);

  dataTrainingsService = inject(DataTrainingService)
  addTraining() {
    const newTraining = this.trainingService.getTrainingByHeader(this.name);
    console.log(newTraining);
    this.dataTrainingsService.addItem(newTraining);
    console.log(localStorage.getItem('trainingsUserChose'));
  }

  exit() {
    this.isVisible = false;
    this.isVisibleEmitter.emit(this.isVisible);
  }
}
