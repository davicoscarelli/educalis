import { Component, OnInit } from '@angular/core';
import {
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

  constructor() { }

  ngOnInit(): void {
  }

}
