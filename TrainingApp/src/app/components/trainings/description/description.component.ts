import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hash } from 'crypto';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
   descriptions: {[key :string] : string}=
   {"Get stronger": "качайся много ешь куринную грудку", 'Gain weight': 'качайся много ешь гречку и куринную грудку'};
  @Input() name!: string;
}
