import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]',
  standalone: true
})
export class CardHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyTextHoverStyles();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTextHoverStyles();
  }

  private applyTextHoverStyles(): void {
    const textElements = this.el.nativeElement.querySelectorAll('h3, p');

    textElements.forEach((el: HTMLElement) => {
      this.renderer.setStyle(el, 'font-style', 'italic');
      this.renderer.setStyle(el, 'color', 'blue');
    });
  }

  private removeTextHoverStyles(): void {
    const textElements = this.el.nativeElement.querySelectorAll('h3, p');

    textElements.forEach((el: HTMLElement) => {
      this.renderer.removeStyle(el, 'font-style');
      this.renderer.removeStyle(el, 'color');
    });
  }
}
