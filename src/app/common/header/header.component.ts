import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input () title: string ;
  constructor() { }

  ngOnInit() {
    console.log('The boolen value  we are receiving here is: ' + this.title)
  }

}
