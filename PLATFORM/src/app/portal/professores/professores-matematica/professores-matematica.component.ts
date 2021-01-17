import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBookReader
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-professores-matematica',
  templateUrl: './professores-matematica.component.html',
  styleUrls: ['./professores-matematica.component.css']
})
export class ProfessoresMatematicaComponent implements OnInit {
  faBookReader = faBookReader;

  professores = [
    {
      label: 'Matemática',
      urlImage: '../../../../assets/img/professores/matematica/prof-1.png',
      professor: 'Juliana Ainb',
    },
    {
      label: 'Matemática',
      urlImage: '../../../../assets/img/professores/matematica/prof-2.png',
      professor: 'Maria Eugenia',
    },
    {
      label: 'Matemática',
      urlImage: '../../../../assets/img/professores/matematica/prof-3.png',
      professor: 'Clotilde Costa',
    },
    {
      label: 'Matemática',
      urlImage: '../../../../assets/img/professores/matematica/prof-4.png',
      professor: 'Julia Mara',
    },
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
