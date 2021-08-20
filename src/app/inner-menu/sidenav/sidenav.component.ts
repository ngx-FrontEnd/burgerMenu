import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inner-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class InnerSidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  @Output() manuName = new EventEmitter();

  menu = [
    { item: 'Home', link: '/innermenu/innerhome' },
    { item: 'About', link: '/innermenu/innerabout' },
  ];
  constructor() { }


  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public getMenu = (item: any) => {
    // console.log(item);
    this.manuName.emit(item);
  }

  ngOnInit() {

  }

}
