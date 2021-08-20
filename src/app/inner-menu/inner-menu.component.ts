import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-menu',
  templateUrl: './inner-menu.component.html',
  styleUrls: ['./inner-menu.component.css']
})
export class InnerMenuComponent implements OnInit {

  constructor() { }
  menuName: any;
  setMenuName = (data: any) => this.menuName = data;

  ngOnInit() {
    this.menuName = 'Home';
  }

}
