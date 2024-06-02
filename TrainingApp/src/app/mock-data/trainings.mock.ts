import { Observable, of } from "rxjs";
import { Training } from "../models/training.model";
import { Injectable } from "@angular/core";

@Injectable()
export class TrainingsMock {
  // public getTrainings(): Observable<Training[]> {
  //   return of([{
  //     header: "Increase your bench press",
  //     img: "assets/man-barbell-bench-press.png",
  //     tag1: "Get stronger",
  //     tag1Img: "assets/get-stronger.jpg",
  //     tag2: "30 minutes",
  //     tag2Img: "assets/30-mins.jpg",
  //     des: false
  //   },
  //   {
  //     header: "Chest growth in the gym",
  //     img: "assets/chest-growth.jpg",
  //     tag1: "Gain weight",
  //     tag1Img: "assets/gain-weight.jpg",
  //     tag2: "30 minutes",
  //     tag2Img: "assets/30-mins.jpg",
  //     des: false
  //   },
  //   {
  //     header: "Chest growth in the gym",
  //     img: "assets/chest-growth.jpg",
  //     tag1: "Gain weight",
  //     tag1Img: "assets/gain-weight.jpg",
  //     tag2: "30 minutes",
  //     tag2Img: "assets/30-mins.jpg",
  //     des: false
  //   }]
  //   )
  // }
}