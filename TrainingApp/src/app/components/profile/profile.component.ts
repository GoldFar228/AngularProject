import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileData } from '../../models/ProfileData.model';
import { ValidatorMsgComponent } from "../../reusable/validator-msg/validator-msg.component";
import { Training } from '../../models/Training.model';
import { TrainingItemComponent } from "../trainings/training-item/training-item.component";
import { IfDirective } from '../../CustomDirectives/profileIf.directive';
import { TrainingSessionComponent } from "./training-session/training-session.component";
import { TrainingSession } from '../../models/TrainingSession.model';
import { StoredTrainingSession } from '../../models/StoredTrainingSession.model';
import { TrainingSessionService } from '../../services/trainingSession.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [CommonModule, ReactiveFormsModule, ValidatorMsgComponent, TrainingItemComponent, IfDirective, TrainingSessionComponent]
})
export class ProfileComponent implements OnInit {

  profileData: ProfileData = JSON.parse(localStorage.getItem('profileData'));
  trainingsUserChose: Training[];
  training: Training;
  display: boolean;

  profileService = inject(ProfileService)
  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    age: [this.profileData ? this.profileData.age : '', [Validators.required, Validators.max(150), Validators.min(0)]],
    height: [this.profileData ? this.profileData.height : '', [Validators.required, Validators.max(300), Validators.min(10)]],
    weight: [this.profileData ? this.profileData.weight : '', [Validators.required, Validators.max(300), Validators.min(2)]],
    gender: [this.profileData ? this.profileData.gender : '', Validators.required]
  })

  genders: { value: string, str: string }[] = [
    { value: "", str: "--sex--" },
    { value: "male", str: "male" },
    { value: "female", str: "female" }
  ];

  ngOnInit(): void {
    this.trainingsUserChose = JSON.parse(localStorage.getItem('trainingsUserChose'));
    if (this.trainingsUserChose !== null) {
      this.display = true;
    }
    this.setSessions();
  }

  onSubmit() {
    if (this.profileData) {
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
    else {
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

  storedTrainingSession = new TrainingSessionService();
  trainingSessionVisible: boolean = false

  sessionId: number;
  show() {
    let storedTrainingSession = new StoredTrainingSession();
    this.sessionId = storedTrainingSession.generateId();
    this.trainingSessionVisible = true;
  }

  delete() {
    this.profileService.removeAllItems();
  }

  isClicked: boolean = false;
  isFreeWeight: boolean = false;
  changeIsClicked(freeWeight: boolean) {
    this.isClicked = true;
    this.isFreeWeight = freeWeight;
  }

  session: StoredTrainingSession[];
  trainingForSession: TrainingSession[];
  setSessions() {
    this.session = JSON.parse(localStorage.getItem('userTrainingSession'));
    this.trainingForSession = JSON.parse(localStorage.getItem(''));
    console.log(this.session);
  }

  trainingSessionService = inject(TrainingSessionService);

  saveTrainingSession() {
    let trainingSession: TrainingSession[] = JSON.parse(localStorage.getItem('')) || [];
    const neededData = trainingSession.reverse().filter(item => item.sessionId === this.sessionId)
    let storedTrainingSession: StoredTrainingSession = new StoredTrainingSession();
    storedTrainingSession.id = this.sessionId;
    storedTrainingSession.trainingSessions = neededData;
    this.profileService.addTrainingSessionToStoredSession(storedTrainingSession);
  }

  deleteCurrentSession(session: StoredTrainingSession) {
    this.profileService.removeItem(session);
  }
}
