import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpTest]'
})
export class TestDirective implements OnInit {

  @Input() fpTest!: string;
  @Input() fpTestBlockBorder!: { color: string };

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }

  ngOnInit(): void {
    this._renderer.setStyle(this._el.nativeElement, 'background', this.fpTest || 'red')
    console.log(this.fpTestBlockBorder)
  }

  @HostListener('click')
  blockClick() {
    console.log('click on ' + this.fpTest + ' block')
  }

}
