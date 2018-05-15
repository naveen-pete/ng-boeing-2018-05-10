import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color = 'yellow';
  constructor(private hostElement: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //this.hostElement.nativeElement.style.backgroundColor = this.color;
    console.log('directive created');
  }

  setColor(color) {
    // this.hostElement.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(
      this.hostElement.nativeElement,
      'backgroundColor',
      color
    );
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setColor(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setColor('');
  }
}

// <h2 appHighlight></h2>
// <p appHighlight></p>
