import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private descriptions: {[key :string] : string} = 
  {"Get stronger": "качайся много ешь куринную грудку", 'Gain weight': 'качайся много ешь гречку и куринную грудку'};
  getData(): {[key :string] : string} {
    return this.descriptions;
  }
}