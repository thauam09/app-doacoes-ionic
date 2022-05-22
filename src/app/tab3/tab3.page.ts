import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  whats() {
    const name = this.form.get('name').value;
    const address = this.form.get('address').value;
    const text = `Olá, meu nome é ${name}, e moro em: ${address}. Vim através do seu App. Gostaria de receber doações.`;
    this.openURL(
      `https://api.whatsapp.com/send?phone=5511974969356&text=${encodeURI(
        text
      )}`
    );
  }

  openURL(url: string) {
    window.open(url, '_blank').focus();
  }

  submit() {
    this.whats();
  }
}
