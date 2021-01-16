import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  disciplinas = [
    {
      label: 'Geografia',
      urlImage: '../../../assets/img/disciplinas/geografia.png',
      id: 'geo',
    },
    {
      label: 'Matematica',
      urlImage: '../../../assets/img/disciplinas/matematica.png',
      id: 'mat',
    },
    {
      label: 'Física',
      urlImage: '../../../assets/img/disciplinas/fisica.png',
      id: 'fis',
    },
    {
      label: 'Química',
      urlImage: '../../../assets/img/disciplinas/quimica.png',
      id: 'quim',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onClickDisciplina(id) {
    switch (id) {
      case 'geo':
        console.log('Ainda não implantado :(');
        break;
      case 'mat':
        this.route.navigate(['portal/disciplinas/matematica']);
        break;
      case 'fis':
        console.log('Ainda não implantado :(');
        break;
      case 'quim':
        console.log('Ainda não implantado :(');
        break;
      default:
        console.log('Ainda não implantado :(');
        break;
    }
  }
}
