import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  MAX_LENGTH_NAME = 50;
  passwordVisible = false;
  passwordInput: HTMLInputElement;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private elementRef: ElementRef<HTMLInputElement>,

    private router: Router) {

    this.form = fb.nonNullable.group({
      email: ['test@angular-university.io', [Validators.required, Validators.email, Validators.maxLength(this.MAX_LENGTH_NAME)]],
      password: ['test', [Validators.required]]
    });
    this.passwordInput = elementRef.nativeElement;
  }

  ngOnInit() {

  }

  login() {

  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

}

