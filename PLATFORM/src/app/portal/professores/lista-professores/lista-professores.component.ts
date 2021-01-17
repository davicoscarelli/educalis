import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBookReader
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-professores',
  templateUrl: './lista-professores.component.html',
  styleUrls: ['./lista-professores.component.css']
})
export class ListaProfessoresComponent implements OnInit {

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
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClickCard(id) {
    switch (id) {
      case 'mat':
        this.route.navigate(['portal/professores/matematica']);
        break;
      default:
        console.log('Ainda não emplementado :(');
    }
  }

}
