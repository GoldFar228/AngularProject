import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  private descriptions: Record<string, string> = 
  {"Get stronger": "качайся много ешь куринную грудку", 'Gain weight': 'качайся много ешь гречку и куринную грудку'};
  getData(): Record<string, string> {
    return this.descriptions;
  }
}