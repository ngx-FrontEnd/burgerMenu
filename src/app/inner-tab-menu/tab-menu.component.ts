import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  constructor() { }

  menuName: any;

  menu = [
    { label: 'Home', link: '/innertabmenu/innertabhome' },
    { label: 'About', link: '/innertabmenu/innertababout' },
  ];
  getName(data: any) {
    this.menuName = data;
  }
  ngOnInit(): void {
    this.menuName = "Home";
  }

}
