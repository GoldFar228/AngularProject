import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator-msg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './validator-msg.component.html',
  styleUrl: './validator-msg.component.css'
})
export class ValidatorMsgComponent {
  @Input()
  public control!: AbstractControl;

  @Input()
  public errorMessage: string;
}
