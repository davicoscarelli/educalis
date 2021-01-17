import { Component, OnInit } from '@angular/core';
import { faBookReader, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {

  faBookReader = faBookReader;
  faStar = faStar;

  boletim = [
    { materia: 'Geografia', professor: 'David Brasil', pontos: '15,6' },
    { materia: 'Matemática', professor: 'Juliana Ainb', pontos: '25,7' },
    { materia: 'Física', professor: 'Albert Junior', pontos: '28,0' },
    { materia: 'Química', professor: 'Carla Nunes', pontos: '26,4' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
