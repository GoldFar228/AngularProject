import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-diets-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diets-item.component.html',
  styleUrl: './diets-item.component.css',
})
export class DietsItemComponent {
  @Input()
  diet: { header: string; img: string; description: string; };

  public showDescription: boolean = false;

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

}
