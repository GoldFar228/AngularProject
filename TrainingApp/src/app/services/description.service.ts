import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';
import { TrainingDescription } from '../models/training-description.model';

@Injectable({
    providedIn: 'root'
})
export class DescriptionService {

    private _descriptions: TrainingDescription[] =
        [{
            name: "Increase your bench press",
            descr: "You wanna increase your bench press? Well, we've got right training for you. Get ready, it will be hard."
        },
        {
            name: "Chest growth in the gym",
            descr: "It's chest growth training you need because all usefull exercises are here. \
            Here what should you do: \
            1)Bench press: first 2 sets must be a warm up so take the light weight and do these sets for 12-15 reps.\
            Your next 2 sets should be 50-60% of your max weight you could bench and do between 8 or 10 reps.\
            Your last 2 sets should be 70-80%(you could do more after some trainings) of your max weight you could bench, so do between 6-8 reps\
            2)Incline bench press:\
            This excercise for you upper chest growth",
        }];

    public getData(): TrainingDescription[] {
        return this._descriptions;
    }
    public addItem(newTrainingDescription: TrainingDescription): void {
        this._descriptions.push(newTrainingDescription);
    }
}