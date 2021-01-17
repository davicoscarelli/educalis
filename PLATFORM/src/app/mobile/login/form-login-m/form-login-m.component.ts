import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-login-m',
  templateUrl: './form-login-m.component.html',
  styleUrls: ['./form-login-m.component.css']
})
export class FormLoginMComponent implements OnInit {

  loginForm: FormGroup;
  faChevronLeft = faChevronLeft;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      matricula: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  login() {
    this.route.navigate(['/m/portal']);
  }

  back() {
    this.route.navigate(['/m/login']);
  }

}
