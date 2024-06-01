import { TrainingSession } from "./TrainingSession.model";

export class StoredTrainingSession {
    id: number = 0;
    trainingSessions: TrainingSession[] = [];

    constructor() {
        this.id = this.generateId();
    }

    getId() {
        return this.id
    }

    generateId() {
        const userTrainingSessions = JSON.parse(localStorage.getItem('userTrainingSession')) || [];
        let ghostId = userTrainingSessions.reduce((max, obj) => obj.id > max.id ? obj : max, userTrainingSessions[0]);
        if(ghostId === undefined){
            return this.id;
        }
        else{
            this.id = ghostId.id;
        }
        return this.id + 1;
    }
}