import { CommonModule } from '@angular/common';
import { DietsItemComponent } from './diets-item/diets-item.component';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorMsgComponent } from "../../reusable/validator-msg/validator-msg.component";
import { DietsService } from '../../services/diets.service';

@Component({
    selector: 'app-diets',
    standalone: true,
    templateUrl: './diets.component.html',
    styleUrl: './diets.component.css',
    imports: [CommonModule, ReactiveFormsModule, DietsItemComponent, ValidatorMsgComponent]
})
export class DietsComponent {
  genders: {value: string, str: string}[] = [
    {value: "", str: "--sex--"}, 
    {value: "male", str: "male"},
    {value: "female", str: "female"}
]
//достаю данные из localStorage, чтобы затем вставить их в форму, для удобства пользователя
  profileData = JSON.parse(localStorage.getItem('profileData'));
  
  dietsService = inject(DietsService);
  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    age: [this.profileData ? this.profileData.age : '' , [Validators.required, Validators.max(150), Validators.min(0)]],
    height: [this.profileData ? this.profileData.height : '', [Validators.required, Validators.max(300), Validators.min(10)]],
    weight: [this.profileData ? this.profileData.weight : '', [Validators.required, Validators.max(300), Validators.min(2)]],
    gender: [this.profileData ? this.profileData.gender : '', Validators.required]
  })
  // age = localStorage.getItem('name');

  loseWeight: number;
  keepWeight: number;
  gainWeight: number;

  onSubmit(){
    this.dietsService.calculateCalories(this.form.value.weight, this.form.value.height, this.form.value.age, this.form.value.gender)
    this.loseWeight = this.dietsService.loseWeight;
    this.keepWeight = this.dietsService.keepWeight;
    this.gainWeight = this.dietsService.gainWeight; 
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
