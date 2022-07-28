import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { TextAreaComponent } from 'src/app/shared/components/text-area/text-area.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit{

  messageForm: FormGroup;
  isMessageSent: boolean = false;

  @ViewChild('nameInput') nameInput: InputComponent;
  @ViewChild('emailInput') emailInput: InputComponent;
  @ViewChild('messageInput') messageInput: TextAreaComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initMessageForm();
  }

  initMessageForm() {
    this.messageForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]] 
    })
  }

  onNameChange() {
    const name = this.messageForm.get('name');
    if (name.hasError('required')) {
      this.nameInput.hasErrors = true;
      this.nameInput.errorMessage = 'Campo obligatorio!';
      return
    }
    this.nameInput.hasErrors = false;
    this.nameInput.errorMessage = '';
  }

  onEmailChange() {
    const email = this.messageForm.get('email');
    if (email.hasError('required')) {
      this.emailInput.hasErrors = true;
      this.emailInput.errorMessage = 'Campo obligatorio!';
      return
    }

    if (email.hasError('email')) {
      this.emailInput.hasErrors = true;
      this.emailInput.errorMessage = 'Correo no valido!';
      return
    }

    this.emailInput.hasErrors = false;
    this.emailInput.errorMessage = '';
  }

  onMessageChange() {
    const name = this.messageForm.get('message');
    if (name.hasError('required')) {
      this.messageInput.hasErrors = true;
      this.messageInput.errorMessage = 'Campo obligatorio!';
      return
    }
    this.messageInput.hasErrors = false;
    this.messageInput.errorMessage = '';
  }

  sendMessage() {
    if (this.messageForm.valid) {
      this.isMessageSent = true;
    }
  }

  sendNewMessage() {
    this.isMessageSent = false;
    this.messageForm.reset();
  }

}
