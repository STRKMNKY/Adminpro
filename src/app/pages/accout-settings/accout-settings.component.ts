import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(  private _settings: SettingsService ) { }

  ngOnInit() {
    this.putCheck();
  }

  cambiarColor( tema: string, link: any ) {
    this.check(link);
    this._settings.aplicarTema( tema );
  }

  check( link: any ) {
    let selector: any = document.getElementsByClassName('selector');
    for ( let ref of selector) {
        ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  putCheck() {
    let selector: any = document.getElementsByClassName('selector');
    for ( let ref of selector) {
      if ( ref.getAttribute('data-theme') === this._settings.ajustes.tema ) {
          ref.classList.add('working');
          break;
      }
  }
  }

}
