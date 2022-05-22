import { Component } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  donateFood() {
    this.openURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Alimento'
    );
  }

  donateBlood() {
    this.openURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Sangue'
    );
  }

  donateClothes() {
    this.openURL(
      'https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Roupas'
    );
  }

  openURL(url: string) {
    window.open(url, 'blank').focus();
  }
}
