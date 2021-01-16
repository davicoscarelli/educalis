import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrls: ['./conteudos.component.css']
})
export class ConteudosComponent implements OnInit {

  conteudo = [
    { label: 'Inequações', id: 'ineq'},
    { label: 'Equações 1º', id: 'eqprim'},
    { label: 'Equações 2º', id: 'eqseg'},
    { label: 'Conjuntos', id: 'conj'}
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClickConteudo(id) {
    switch (id) {
      case 'conj':
        this.route.navigate(['portal/disciplinas/matematica/conjuntos']);
        break;
      default:
        console.log('Ainda não implantado :(');
        break;
    }
  }

}
