import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-form-reactive',
  templateUrl: './practice-form-reactive.component.html',
  styleUrls: ['./practice-form-reactive.component.css'],
})
export class PracticeFormReactiveComponent implements OnInit {
  form!: FormGroup;
  result!: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.initForm();
  }

  send() {
    this.form.invalid
      ? (this.result = 'Usuario invalido')
      : (this.result = 'Usuario valido');
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }
}
