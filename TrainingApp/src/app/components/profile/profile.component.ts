import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  //TODO: Сделать так, чтобы данные возраста, пола, роста и веса сохранялись в localStorage и пользователю не приходилось вводить
  //свои данные заново, также сделать так, чтобы данные из этой компоненты в компоненту 'diets', чтобы в неё пользователю также
  //не приходилось вводить постоянно свои данные.
}
