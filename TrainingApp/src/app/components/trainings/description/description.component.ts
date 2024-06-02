import { CommonModule } from '@angular/common';
import {  Component, EventEmitter, HostListener, Input, OnChanges, Output, inject } from '@angular/core';
import { TrainingDescription } from '../../../models/training-description.model';
import { DescriptionService } from '../../../services/description.service';
import { TrainingService } from '../../../services/trainings.service';
import { Training } from '../../../models/training.model';
import { DataTrainingService } from '../../../services/dataTrainings.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnChanges {
  public descriptionService = inject(DescriptionService);
  public trainingService = inject(TrainingService);

  public trainings: Training[] = this.trainingService.getData();
  public descriptions: TrainingDescription[] = this.descriptionService.getData();

  @Input() name!: string;

  @Input() isVisible: boolean;
  @Output() isVisibleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  public imgPath: string = '';

  ngOnChanges() {
    this.imgPath = this.trainingService.getTrainingByHeader(this.name).img;
  }

  public trainingsUserChoseJSON?: string = localStorage.getItem('trainingsUserChose');

  public trainingsUserChose: Training[] = JSON.parse(this.trainingsUserChoseJSON);

  public dataTrainingsService = inject(DataTrainingService)
  public addTraining(): void {
    const newTraining = this.trainingService.getTrainingByHeader(this.name);
    this.dataTrainingsService.addItem(newTraining);
  }

  public exit(): void {
    this.isVisible = false;
    this.isVisibleEmitter.emit(this.isVisible);
  }

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    if ((event.target as HTMLElement).className === 'description-container') {
      this.exit()
    }
  }
}
