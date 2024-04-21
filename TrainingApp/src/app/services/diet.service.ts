import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { dietsMock } from "../mocks/diets-mocks/diets.mock";

@Injectable({
    providedIn: "root"
})

export class DietService {
    getDiets(): Observable<any[]> {
        return of(dietsMock)
    }
}
