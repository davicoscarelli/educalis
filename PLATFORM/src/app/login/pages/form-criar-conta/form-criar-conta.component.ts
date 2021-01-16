import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-criar-conta',
  templateUrl: './form-criar-conta.component.html',
  styleUrls: ['./form-criar-conta.component.css']
})
export class FormCriarContaComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

}
