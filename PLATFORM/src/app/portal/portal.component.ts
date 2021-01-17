import { Component, OnInit } from '@angular/core';
import {
  faBookOpen,
  faBookReader,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css'],
})
export class PortalComponent implements OnInit {

  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faBookOpen = faBookOpen;
  faBookReader = faBookReader;
  faSignOutAlt = faSignOutAlt;

  menu = [
    {
      label: 'Disciplinas',
      icon: faUser,
      url: 'disciplinas',
    },
    {
      label: 'Calendarios',
      icon: faCalendarAlt,
      url: 'calendarios',
    },
    {
      label: 'Boletim',
      icon: faBookOpen,
      url: 'boletim',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToProfessores() {
    const redirect =
      this.route.url === '/portal/disciplinas/matematica'
        ? 'professores/matematica'
        : this.route.url === '/portal/disciplinas/matematica/conjuntos'
        ? 'professores/matematica'
        : 'professores';
    return redirect;
  }
}
