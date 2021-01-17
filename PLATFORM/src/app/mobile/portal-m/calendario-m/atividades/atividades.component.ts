import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  faChevronLeft = faChevronLeft;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.route.navigate(['m/portal/calendarios']);
  }

}
