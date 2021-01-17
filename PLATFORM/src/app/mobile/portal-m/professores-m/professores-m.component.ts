import { Component, OnInit } from '@angular/core';
import {
  faBookReader
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-professores-m',
  templateUrl: './professores-m.component.html',
  styleUrls: ['./professores-m.component.css']
})
export class ProfessoresMComponent implements OnInit {

  faBookReader = faBookReader;

  professores = [
    {
      label: 'Geografia',
      urlImage: '../../../../assets/img/professores/geral/prof-geografia.png',
      professor: 'David Brasil',
      id: 'geo',
    },
    {
      label: 'Matemática',
      urlImage: '../../../../assets/img/professores/geral/prof-matematica.png',
      professor: 'Juliana Ainb',
      id: 'mat',
    },
    {
      label: 'Física',
      urlImage: '../../../../assets/img/professores/geral/prof-fisica.png',
      professor: 'Albert Junior',
      id: 'fis',
    },
    {
      label: 'Química',
      urlImage: '../../../../assets/img/professores/geral/prof-quimica.png',
      professor: 'Carla Nunes',
      id: 'quim',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
