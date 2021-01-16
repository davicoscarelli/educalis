import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {

  @Input() urlImage: string;
  @Input() color: string;
  @Input() tela: string;

  constructor() { }

  ngOnInit(): void {
  }

}
