import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faRocket,
  faEye,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  faRocket = faRocket;
  faEye = faEye;
  faGem = faGem;

  formContribua: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crateForm();
  }

  redirectLogin() {
    this.route.navigate(['login']);
  }

  crateForm() {
    this.formContribua = this.formBuilder.group({
      nome: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      email: [null, [Validators.required]],
      formaContribuicao: [null, [Validators.required]],
    });
  }
}
