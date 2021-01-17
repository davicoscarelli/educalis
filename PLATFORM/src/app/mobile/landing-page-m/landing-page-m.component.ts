import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faRocket,
  faEye,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page-m',
  templateUrl: './landing-page-m.component.html',
  styleUrls: ['./landing-page-m.component.css']
})
export class LandingPageMComponent implements OnInit {

  faRocket = faRocket;
  faEye = faEye;
  faGem = faGem;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.route.navigate(['m/login']);
  }

}
