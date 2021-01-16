import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-esqueceu-senha',
  templateUrl: './form-esqueceu-senha.component.html',
  styleUrls: ['./form-esqueceu-senha.component.css']
})
export class FormEsqueceuSenhaComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
    });
  }

}
