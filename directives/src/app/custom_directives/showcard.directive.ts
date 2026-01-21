import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowCard]',
  standalone: true
})
export class ShowCardDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.applyCardStyles();
  }

  private applyCardStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #ddd');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f9f9f9');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'margin', '10px 0');

    // Default styles for text
    const headers = this.el.nativeElement.querySelectorAll('h3');
    const paragraphs = this.el.nativeElement.querySelectorAll('p');

    headers.forEach((header: HTMLElement) => {
      this.renderer.setStyle(header, 'font-size', '18px');
      this.renderer.setStyle(header, 'font-weight', 'bold');
    });

    paragraphs.forEach((para: HTMLElement) => {
      this.renderer.setStyle(para, 'font-size', '14px');
      this.renderer.setStyle(para, 'color', '#666');
    });
  }
}
