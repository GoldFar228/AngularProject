import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {

  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    age: ['', [Validators.required, Validators.max(150), Validators.min(0)]],
    height: ['', [Validators.required, Validators.max(300), Validators.min(10)]],
    weight: ['', [Validators.required, Validators.max(300), Validators.min(2)]],
    sex: ['', Validators.required]
  })

  loseWeight: number;
  keepWeight: number;
  gainWeight: number;

  onSubmit(){

    if(this.form.value.sex === "man"){
      this.loseWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 + 5) * 1.2 * 0.8).toFixed(0)); //1.2 множитель - минимальный множитель активности. Чем выше активность, тем больше множитель
      this.keepWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 + 5) * 1.2).toFixed(0));
      this.gainWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 + 5) * 1.2 * 1.2).toFixed(0));
    }

    else if(this.form.value.sex === "woman"){
      this.loseWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 - 161) * 1.2 * 0.8).toFixed(0));
      this.keepWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 - 161) * 1.2).toFixed(0));
      this.gainWeight = +(((+this.form.value.weight * 10 + +this.form.value.height * 6.25
        - +this.form.value.age * 5 - 161) * 1.2 * 1.2).toFixed(0));
    }
  }
}
