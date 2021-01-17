import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import {
  faBook,
  faBookOpen,
  faBookReader,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-portal-m',
  templateUrl: './portal-m.component.html',
  styleUrls: ['./portal-m.component.css']
})
export class PortalMComponent implements OnInit {

  faUser = faUser;
  faBook = faBook;
  faCalendarAlt = faCalendarAlt;
  faBookOpen = faBookOpen;
  faBookReader = faBookReader;
  faSignOutAlt = faSignOutAlt;

  menu = [
    {
      label: 'Disciplinas',
      icon: faBook,
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
    {
      label: 'Professores',
      icon: faBookReader,
      url: 'professores',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
