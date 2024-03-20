import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training-item',
  standalone: true,
  imports: [],
  templateUrl: './training-item.component.html',
  styleUrl: './training-item.component.css'
})
export class TrainingItemComponent {
  @Input()
  training: {header: string, img: string, tag1: string, tag1Img: string, tag2: string, tag2Img: string};
}
