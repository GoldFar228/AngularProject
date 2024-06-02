import { Injectable } from '@angular/core';
import { TrainingDetail } from '../models/training-detail.model';

@Injectable({
    providedIn: 'root'
})
export class DetailService {

    private detais: TrainingDetail[] =
        [{
            sequence_number: 1,
            body: "You wanna increase your bench press? Well, we've got right training for you. Get ready, it will be hard."
        },
        {
            sequence_number: 1,
            body: "It's chest growth training you need because all usefull exercises are here. \
            Here what should you do:\
            1)Bench press: first 2 sets must be a warm up so take the light weight and do these sets for 12-15 reps.\
            Your next 2 sets should be 50-60% of your max weight you could bench and do between 8 or 10 reps.\
            Your last 2 sets should be 70-80%(you could do more after some trainings) of your max weight you could bench, so do between 6-8 reps\
            2)Incline bench press:\
            This excercise for you upper chest growth",
        }];

    getData(): TrainingDetail[] {
        return this.detais;
    }
    addItem(newTrainingDescription: TrainingDetail): void {
        this.detais.push(newTrainingDescription);
    }
}