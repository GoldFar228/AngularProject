import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, inject } from '@angular/core';
import { Hash } from 'crypto';
import { TrainingDescription } from '../../../models/TrainingDescription.model';
import { DescriptionService } from '../../../services/description.service';
import { TrainingService } from '../../../services/trainings.service';
import { Training } from '../../../models/Training.model';

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

  addTraining() {
    let newTraining = this.trainingService.getTrainingByHeader(this.name);
    // if (newTraining === JSON.parse(localStorage.getItem('trainingsUserChose'))) {
    //   console.log('This is already exist')
    // }
    // else {
    console.log(newTraining)
    this.trainingsUserChose.push(newTraining)
    const updatedTrainingsUserChoseJSON = JSON.stringify(this.trainingsUserChose)
    console.log('item added', newTraining);
    console.log('you list', updatedTrainingsUserChoseJSON);
    localStorage.setItem('trainingsUserChose', updatedTrainingsUserChoseJSON);
    console.log(localStorage.getItem('trainingsUserChose'));
    // }
    //TODO: сделать так, чтобы при клике на кнопку "добавить" тренировка добавлялалсь в профиль
    //сделать так, чтобы при клике добавлялся объект в localStorage и затем в профиле, доставать данные оттуда 
  }

  exit() {
    this.isVisible = false;
    this.isVisibleEmitter.emit(this.isVisible);
  }
}
