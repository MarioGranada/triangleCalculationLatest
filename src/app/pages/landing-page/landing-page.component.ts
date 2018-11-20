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
    ts.ui.Footer.collabbutton(function onclick() {
      window.open(
        'https://github.com/MarioGranada/triangleCalculationLatest',
        '_blank'
      );
    });
    ts.ui.get('#mycard', card => {
      card.render({
        id: 'mario-granada',
        data: {
          name: 'Mario Andres Granada Hernandez',
          size: '1',
          location: 'Medellin, Colombia',
          industry: 'Software & IT',
          connection: 2
        }
      });
    });
  }
}
