import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DetailService } from '../../../services/detail.servise';
import { TrainingDetail } from '../../../models/TrainingDetail';

@Component({
  selector: 'app-training-detail',
  standalone: true,
  imports: [],
  templateUrl: './training-detail.component.html',
  styleUrl: './training-detail.component.css'
})
export class TrainingDetailComponent implements OnInit { 
       
    id: number | undefined;
      
    constructor(private route: ActivatedRoute){}
    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => params.getAll("id"))
        )
        .subscribe(data=> this.id = +data);
      }
    detailsService = inject(DetailService)
    details : TrainingDetail[] = this.detailsService.getData()
}
