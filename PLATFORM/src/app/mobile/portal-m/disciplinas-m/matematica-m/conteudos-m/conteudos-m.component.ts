import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-conteudos-m',
  templateUrl: './conteudos-m.component.html',
  styleUrls: ['./conteudos-m.component.css']
})
export class ConteudosMComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faPlayCircle = faPlayCircle;

  conteudos = [
    {
      label: 'Conjuntos', started: true, progress: '32', last: false, url: 'm/portal/disciplinas/matematica/conjuntos'
    },
    {
      label: 'Inequações', started: false, progress: '0', last: false, url: null
    },
    {
      label: 'Equações 1º', started: false, progress: '0', last: false, url: null
    },
    {
      label: 'Equações 2º', started: false, progress: '0', last: true, url: null
    },
  ];
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.route.navigate(['m/portal/disciplinas']);
  }

  goTo(url) {
    this.route.navigate([url]);
  }

}
