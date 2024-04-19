import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DescriptionService } from '../../../services/description.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  constructor(private descriptionService: DescriptionService){ }
   descriptions: {[key :string] : string};
   ngOnInit(): void {
    this.descriptions = this.descriptionService.getData()
  }
  @Input() name!: string;
}
