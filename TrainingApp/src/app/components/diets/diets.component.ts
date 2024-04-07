import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DietsItemComponent } from './diets-item/diets-item.component';

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, DietsItemComponent],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {
  @ViewChild('age')
  age: ElementRef;

  @ViewChild('weight')
  weight: ElementRef;

  @ViewChild('height')
  height: ElementRef;

  loseWeight: number;
  keepWeight: number;
  gainWeight: number;

  toCalculateWeight(){
    this.loseWeight = Number(((+this.weight.nativeElement.value * 10 + +this.height.nativeElement.value * 6.25 
      - +this.age.nativeElement.value * 5) * 1.38 * 0.8).toFixed(0));
    this.keepWeight = Number(((+this.weight.nativeElement.value * 10 + +this.height.nativeElement.value * 6.25 
      - +this.age.nativeElement.value * 5) * 1.38).toFixed(0));
    this.gainWeight = Number(((+this.weight.nativeElement.value * 10 + +this.height.nativeElement.value * 6.25 
      - +this.age.nativeElement.value * 5) * 1.38 * 1.2).toFixed(0));
  }

  public diets: { header: string; img: string; description: string; }[] = [
    {
      header: "Joe Rogan's Carnivore Diet",
      img: "../../../../assets/diets-img/rogan.jpg",
      description: '',
    },
    {
      header: "Sam Sulek's Diet",
      img: "../../../../assets/diets-img/sulek.jpg",
      description: '',
    }
  ]
  
}
