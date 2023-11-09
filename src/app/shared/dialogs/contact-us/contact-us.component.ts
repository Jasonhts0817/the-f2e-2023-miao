import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ButtonComponent } from '../../button.component';
import { Theme } from 'src/app/core/enums/theme.enum';
import { Size } from 'src/app/core/enums/size.enum';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormErrorComponent } from '../../form-error.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    DialogComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {
  Theme = Theme;
  Size = Size;
  isSuccess = false;
  isSubmit = false;
  contactUsForm!: FormGroup<ContactUsForm>;

  constructor(public dialogRef: DialogRef) {}
  ngOnInit(): void {
    this.contactUsForm = new FormGroup<ContactUsForm>({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('')]),
      message: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    this.isSubmit = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    this.isSuccess = true;
  }
}

type ContactUsForm = {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  message: FormControl<string | null>;
};
