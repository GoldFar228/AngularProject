import { TrainingSession } from "./TrainingSession.model";

export class StoredTrainingSession {
    id: number = 0;
    trainingSessions: TrainingSession[] = [];

    constructor(){
        this.id = this.generateId();
    }

    getId(){
        return this.id
    }

    generateId(){
        return this.id + 1;
    }
}