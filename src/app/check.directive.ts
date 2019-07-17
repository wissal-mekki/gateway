import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  //  this.renderer.setStyle(this.el,'class="btn btn-primary"',' type="submit" [disabled]="!propositionForm.form.valid"');
    // renderer.setValue(el.nativeElement,'<i class="fal fa-check"></i>');
  }
@HostListener('click') onMouseEnter() {
  /*  this.renderer.createElement('<i class="fal fa-check"></i>');
  this.renderer.setValue(this.el.nativeElement,'<i class="fal fa-check"></i>');
  this.renderer.setStyle(this.el,'color:green','<i class="fal fa-check"></i>');*/
  console.log('mouseenter');
}
}
