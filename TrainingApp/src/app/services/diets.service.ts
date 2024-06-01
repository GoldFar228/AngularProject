import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DietsService {

    public loseWeight: number;
    public keepWeight: number;
    public gainWeight: number;
    public calculateCalories(weight: string, height: string, age: string, gender: string){
        if(gender === "male"){
          this.loseWeight = +(((+weight * 10 + +height * 6.25
            - +age * 5 + 5) * 1.2 * 0.8).toFixed(0)); //1.2 множитель - минимальный множитель активности. Чем выше активность, тем больше множитель
          this.keepWeight = +(((+weight * 10 + +height * 6.25
            - +age * 5 + 5) * 1.2).toFixed(0));
          this.gainWeight = +(((+weight * 10 + +height * 6.25
            - +age * 5 + 5) * 1.2 * 1.2).toFixed(0));
        }
        else if(gender === "female"){
          this.loseWeight = +(((+weight * 10 + +height * 6.25
            - +age * 5 - 161) * 1.2 * 0.8).toFixed(0));
          this.keepWeight = +(((+weight * 10 + +height * 6.25
            - +age * 5 - 161) * 1.2).toFixed(0));
          this.gainWeight = +(((+weight * 10 + +height * 6.25
            - +age * 5 - 161) * 1.2 * 1.2).toFixed(0));
        }
      }
    
    
}