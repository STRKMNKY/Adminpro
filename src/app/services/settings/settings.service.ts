import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

 ajustes: Settings = {
   themeUrl: 'assets/css/colors/default-dark.css',
   tema: 'default-dark'
 };
  constructor( @Inject( DOCUMENT ) private _document ) {
    this.loadSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.ajustes));
    console.log('Cambios guardados en el localStorage tema: ' + this.ajustes.tema + ' url: ' + this.ajustes.themeUrl );
  }

  loadSettings() {

    if ( localStorage.getItem( 'settings' ) ) {
      this.ajustes = JSON.parse( localStorage.getItem( 'settings' ) );
      this.aplicarTema( this.ajustes.tema );
      console.log('Valores almacendos en el localSorage tema: ' + this.ajustes.tema + ' url: ' + this.ajustes.themeUrl );
    } else {
      console.log('Valores por defecto');
    }

  }

  aplicarTema( tema: string ) {
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.ajustes.themeUrl = url;
    this.ajustes.tema = tema;
    this.saveSettings();
  }


}

interface Settings {
  themeUrl: string;
  tema: string;
}

