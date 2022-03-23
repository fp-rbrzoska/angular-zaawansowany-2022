import { Component, OnInit } from '@angular/core';
import { BaseContainer } from '../BaseContainer';

@Component({
  selector: 'fp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [{ provide: BaseContainer, useExisting: ContainerComponent }]
})
export class ContainerComponent implements OnInit {

  someNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  like() {

    console.log('like image')
  }

}
