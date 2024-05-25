import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileData } from '../../models/ProfileData.model';
import { ValidatorMsgComponent } from "../../reusable/validator-msg/validator-msg.component";
import { Training } from '../../models/Training.model';
import { TrainingItemComponent } from "../trainings/training-item/training-item.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [CommonModule, ReactiveFormsModule, ValidatorMsgComponent, TrainingItemComponent]
})
export class ProfileComponent implements OnInit{

  profileData: ProfileData = JSON.parse(localStorage.getItem('profileData'));
  trainingsUserChose: Training[];
  training: Training;

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

  ngOnInit(): void {
    this.training = JSON.parse(localStorage.getItem('trainingUserChose'));
    console.log(this.training);
  }

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

  @ViewChild('achiveArea')
  achievmentAreaEl: ElementRef;

  @ViewChild('container')
  container: ElementRef;

  setNewAchievment(){
    const newDiv = document.createElement('div');
    newDiv.textContent = this.achievmentAreaEl.nativeElement.value;
    console.log(this.achievmentAreaEl.nativeElement.value);
    this.container.nativeElement.appendChild(newDiv);
    //TODO: сделать так, чтобы добавлялась на страницу запись с прогрессом пользователя, который он внесёт в textarea
  }

}
