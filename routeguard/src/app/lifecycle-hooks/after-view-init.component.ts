import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-after-view-init',
  template: `<p #textElement>Text element to modify after view initialization.</p>`,
  standalone: true,
})
export class AfterViewInitComponent implements AfterViewInit {
  @ViewChild('textElement') textElement!: ElementRef;

  ngAfterViewInit(): void {
    this.textElement.nativeElement.style.color = 'blue';
    console.log('AfterViewInit: View has been initialized.');
  }
}
