import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormat {
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}
