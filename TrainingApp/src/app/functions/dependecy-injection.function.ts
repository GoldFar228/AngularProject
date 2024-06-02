import { InjectionToken } from '@angular/core';

export const MY_TOKEN = new InjectionToken<string>('');

export function myTokenFactory() {
  return 'Trainings';
}