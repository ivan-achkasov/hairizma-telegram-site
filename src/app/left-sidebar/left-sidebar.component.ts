import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  public hide: boolean;

  constructor(private location: Location) {
    this.hide = this.location.path() === '/login';
  }

  ngOnInit(): void {
  }

}
