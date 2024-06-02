import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  searchText: string = '';
  
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>
  
  onSearchTextChange(e: any){
    this.searchText = e.target.value;
    this.searchTextChange.emit(this.searchText);
  }
}
