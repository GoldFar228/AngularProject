import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from '../../../models/Training.model';

@Component({
  selector: 'app-training-item',
  standalone: true,
  imports: [],
  templateUrl: './training-item.component.html',
  styleUrl: './training-item.component.css'
})
export class TrainingItemComponent {
  @Input()
  training: Training;
}
