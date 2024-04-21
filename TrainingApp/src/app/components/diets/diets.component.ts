import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DietsItemComponent } from './diets-item/diets-item.component';
import { DietService } from '../../services/diet.service';

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, DietsItemComponent],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent implements OnInit{
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

  public diets: any[];
  
  constructor(private dietService: DietService) {

  }

  loadDiets(): void {
    this.dietService.getDiets().subscribe(diets => {
      this.diets = diets;
    })
  }

  ngOnInit(): void {
      this.loadDiets();
  }
  
}
