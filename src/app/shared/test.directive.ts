import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective implements OnInit {

  @Input() bgColor!: string;

  constructor(private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {
  }

  ngOnInit(): void {
    this._renderer.setStyle(this._el.nativeElement, 'background', this.bgColor || 'red')
  }

  @HostListener('click')
  blockClick() {
    console.log('click on ' + this.bgColor + ' block')
  }

}
