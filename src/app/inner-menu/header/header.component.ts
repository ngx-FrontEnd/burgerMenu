import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inner-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class InnerHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Input() menuName: any;
  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
