import { Component, Input } from '@angular/core';
import { Training } from '../../../models/training.model';

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
