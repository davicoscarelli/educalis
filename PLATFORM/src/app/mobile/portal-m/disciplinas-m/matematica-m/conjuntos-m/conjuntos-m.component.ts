import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-conjuntos-m',
  templateUrl: './conjuntos-m.component.html',
  styleUrls: ['./conjuntos-m.component.css']
})
export class ConjuntosMComponent implements OnInit {

  faChevronLeft = faChevronLeft;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.route.navigate(['m/portal/disciplinas/matematica']);
  }

}
