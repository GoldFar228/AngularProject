import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef, inject} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[profileIf]',
})
export class IfDirective{

  constructor(private _view: TemplateRef<ElementRef>, private _template: ViewContainerRef){}

  @Input() set profileIf(condition: boolean){
    if(condition){
      this._template.createEmbeddedView(this._view);
    }
    else{
      this._template.clear();
    }
  };

}