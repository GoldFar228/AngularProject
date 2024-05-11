import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileData } from '../../models/ProfileData.model';
import { ValidatorMsgComponent } from "../../reusable/validator-msg/validator-msg.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [CommonModule, ReactiveFormsModule, ValidatorMsgComponent]
})
export class ProfileComponent{
  //TODO: Сделать так, чтобы данные возраста, пола, роста и веса сохранялись в localStorage и пользователю не приходилось вводить
  //свои данные заново, также сделать так, чтобы данные из этой компоненты в компоненту 'diets', чтобы в неё пользователю также
  //не приходилось вводить постоянно свои данные.

  profileData: ProfileData = JSON.parse(localStorage.getItem('profileData'));
  
  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    age: [this.profileData.age, [Validators.required, Validators.max(150), Validators.min(0)]],
    height: [this.profileData.height, [Validators.required, Validators.max(300), Validators.min(10)]],
    weight: [this.profileData.weight, [Validators.required, Validators.max(300), Validators.min(2)]],
    gender: [this.profileData.gender, Validators.required]
  });


  genders: {value: string, str: string}[] = [
    {value: "", str: "--sex--"}, 
    {value: "male", str: "male"},
    {value: "female", str: "female"}
  ];

  onSubmit(){
    if(this.profileData){
      localStorage.removeItem('profileData');
      this.profileData = {
        age: +this.form.getRawValue().age,
        weight: +this.form.getRawValue().weight,
        height: +this.form.getRawValue().height,
        gender: this.form.getRawValue().gender
      }
      localStorage.setItem('profileData', JSON.stringify(this.profileData));
      console.log(JSON.parse(localStorage.getItem('profileData')));
    }
    else{
      this.profileData = {
        age: +this.form.getRawValue().age,
        weight: +this.form.getRawValue().weight,
        height: +this.form.getRawValue().height,
        gender: this.form.getRawValue().gender
      };
      localStorage.setItem('profileData', JSON.stringify(this.profileData));
      console.log(JSON.parse(localStorage.getItem('profileData')));
    }
  }
}
