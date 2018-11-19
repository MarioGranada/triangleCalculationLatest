import { Component, OnInit } from '@angular/core';

declare var ts: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    ts.ui.TopBar.title('Triangle Calculation');
  }
}
