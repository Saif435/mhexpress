import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  Phone = faMobileScreen;
  Email = faEnvelope;
  Location = faLocationDot;

  contactUs: FormGroup;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.myForm();
  }

  myForm() {
    this.contactUs = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(40),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(256),
      ]),
    });
  }

  onSubmit() {
    this.contactService.addMessage(this.contactUs.value).subscribe({
      complete: () => {
        this.contactUs.reset();
        window.scrollTo(0, 0);
        console.log('Sent');
      },
    });
  }
}
