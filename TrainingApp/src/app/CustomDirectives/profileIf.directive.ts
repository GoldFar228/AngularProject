import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef, inject} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[profileIf]',
})
export class IfDirective{

  constructor(private view: TemplateRef<any>, private template: ViewContainerRef){}

  @Input() set profileIf(condition: boolean){
    if(condition){
      this.template.createEmbeddedView(this.view);
    }
    else{
      this.template.clear();
    }
  };

}