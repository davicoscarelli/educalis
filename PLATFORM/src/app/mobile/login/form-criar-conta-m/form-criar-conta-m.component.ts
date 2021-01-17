import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-criar-conta-m',
  templateUrl: './form-criar-conta-m.component.html',
  styleUrls: ['./form-criar-conta-m.component.css']
})
export class FormCriarContaMComponent implements OnInit {

  loginForm: FormGroup;
  faChevronLeft = faChevronLeft;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      nomeEscola: [null, [Validators.required]],
      matricula: [null, [Validators.required]],
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    });
  }

  criarConta() {
    this.route.navigate(['/m/login/login']);
  }

  back() {
    this.route.navigate(['/m/login']);
  }

}
