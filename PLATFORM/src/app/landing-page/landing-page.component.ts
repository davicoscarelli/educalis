import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faRocket,
  faEye,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  faRocket = faRocket;
  faEye = faEye;
  faGem = faGem;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.route.navigate(['login']);
  }
}
