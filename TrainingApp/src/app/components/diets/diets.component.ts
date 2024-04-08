import { CommonModule } from '@angular/common';
import { DietsItemComponent } from './diets-item/diets-item.component';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DietsItemComponent],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {
  genders: {value: string, str: string}[] = [
    {value: "", str: "--sex--"}, 
    {value: "male", str: "male"},
    {value: "female", str: "female"}
]
//достаю данные из localStorage, чтобы затем вставить их в форму, для удобства пользователя
  profileData = JSON.parse(localStorage.getItem('profileData'));
  
  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    age: [this.profileData.age, [Validators.required, Validators.max(150), Validators.min(0)]],
    height: [this.profileData.height, [Validators.required, Validators.max(300), Validators.min(10)]],
    weight: [this.profileData.weight, [Validators.required, Validators.max(300), Validators.min(2)]],
    gender: [this.profileData.gender, Validators.required]
  })
  // age = localStorage.getItem('name');
  loseWeight: number;
  keepWeight: number;
  gainWeight: number;

  onSubmit(){
    // console.log(this.age);
    if(this.form.value.gender === "male"){
      this.loseWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 + 5) * 1.2 * 0.8).toFixed(0)); //1.2 множитель - минимальный множитель активности. Чем выше активность, тем больше множитель
      this.keepWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 + 5) * 1.2).toFixed(0));
      this.gainWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 + 5) * 1.2 * 1.2).toFixed(0));
    }

    else if(this.form.value.gender === "female"){
      this.loseWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 - 161) * 1.2 * 0.8).toFixed(0));
      this.keepWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 - 161) * 1.2).toFixed(0));
      this.gainWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 - 161) * 1.2 * 1.2).toFixed(0));
    }
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
