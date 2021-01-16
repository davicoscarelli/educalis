import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.route.navigate(['login'])
  }

}
