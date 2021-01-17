import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-esqueceu-senha-m',
  templateUrl: './form-esqueceu-senha-m.component.html',
  styleUrls: ['./form-esqueceu-senha-m.component.css']
})
export class FormEsqueceuSenhaMComponent implements OnInit {

  loginForm: FormGroup;
  faChevronLeft = faChevronLeft;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
    });
  }

  esqueceuSenha() {
    this.route.navigate(['/m/login/login']);
  }

  back() {
    this.route.navigate(['/m/login/login']);
  }

}
