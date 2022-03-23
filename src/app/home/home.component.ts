import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BaseContainer } from '../BaseContainer';
import { ContainerComponent } from '../container/container.component';
import { CONFIG_TOKEN } from '../tokens';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  arr = [1,2,3];

  @ViewChildren(BaseContainer) myContainerComponents!: QueryList<BaseContainer>;

  @ViewChild('myInput') input!: ElementRef;
  constructor( @Inject('TEST') private testObje: any, @Inject(CONFIG_TOKEN) private config: any) {
    console.log(config)
  }

  ngAfterViewInit(): void {
    console.log( this.myContainerComponents )
    this.myContainerComponents.changes.subscribe(v => console.log(v))

    fromEvent(this.input.nativeElement, 'input').subscribe(v => console.log(v))
  }

  incr() {
    if ( this.myContainerComponents) {
      this.myContainerComponents.forEach(c => c.like())
      //this.myContainerComponents.forEach(c => c.someNumber++)
    }
  }

  push() {
    this.arr.push(10)
  }

}
