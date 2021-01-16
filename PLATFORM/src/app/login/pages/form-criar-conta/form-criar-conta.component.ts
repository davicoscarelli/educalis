import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-criar-conta',
  templateUrl: './form-criar-conta.component.html',
  styleUrls: ['./form-criar-conta.component.css']
})
export class FormCriarContaComponent implements OnInit {

  loginForm: FormGroup;

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
    this.route.navigate(['/login']);
  }

}
