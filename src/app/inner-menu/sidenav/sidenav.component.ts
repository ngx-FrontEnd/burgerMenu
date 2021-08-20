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
    { label: 'Home', link: '/innermenu/innerhome' },
    { label: 'About', link: '/innermenu/innerabout' },
    { label: 'Download', link: '/innermenu/innerdownload' },
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
