import { Component, Inject, OnInit } from '@angular/core';
import { CONFIG_TOKEN } from '../tokens';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( @Inject('TEST') private testObje: any, @Inject(CONFIG_TOKEN) private config: any) {
    console.log(config)
  }

  ngOnInit(): void {
  }

}
