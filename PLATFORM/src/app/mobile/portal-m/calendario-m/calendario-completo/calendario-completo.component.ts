import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario-completo',
  templateUrl: './calendario-completo.component.html',
  styleUrls: ['./calendario-completo.component.css']
})
export class CalendarioCompletoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openAtividades() {
    this.route.navigate(['m/portal/calendarios/atividades']);
  }

}
