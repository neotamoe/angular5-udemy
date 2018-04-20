import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // this was my solution and it works, but is way more complicated than the instructor-provided solution
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  //
  // @HostListener('click') openDropdown(eventData: Event) {
  //   if (this.elementRef.nativeElement.classList.contains('open')) {
  //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //   }
  // }
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
