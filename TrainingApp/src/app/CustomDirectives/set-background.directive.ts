import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appSetBackground]',
})
export class SetBackgroundDirective implements AfterViewInit{
  @Input() color: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void{
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}