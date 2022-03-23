import { Component, OnInit } from '@angular/core';
import { BaseContainer } from '../BaseContainer';

@Component({
  selector: 'fp-container-text',
  templateUrl: './container-text.component.html',
  styleUrls: ['./container-text.component.scss'],
  providers: [{ provide: BaseContainer, useExisting: ContainerTextComponent }]
})
export class ContainerTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    console.log('like text')
  }

}
