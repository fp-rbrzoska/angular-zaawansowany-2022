import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective {

  @Input() fpHighlight!: string
  constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {
  }

  @HostListener('mouseover')
  mouseover() {
    this._renderer.addClass(this._el.nativeElement, this.fpHighlight || 'highlight');
  }

  @HostListener('mouseout')
  mouseout() {
    this._renderer.removeClass(this._el.nativeElement, this.fpHighlight || 'highlight');
  }

}
