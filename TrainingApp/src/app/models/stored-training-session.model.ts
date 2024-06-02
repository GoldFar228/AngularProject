import { TrainingSession } from "./training-session.model";

export class StoredTrainingSession {
    public id: number = 0;
    public trainingSessions: TrainingSession[] = [];

    constructor() {
        this.id = this.generateId();
    }
    public generateId() {
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