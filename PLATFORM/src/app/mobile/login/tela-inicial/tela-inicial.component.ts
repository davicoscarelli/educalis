import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onlogin() {
    this.route.navigate(['m/login/login']);
  }

  onCriarConta() {
    this.route.navigate(['m/login/criar-conta']);
  }
}
