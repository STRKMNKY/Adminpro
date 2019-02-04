import { Component, OnInit } from '@angular/core';
import { reject, resolve } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      () => console.log('Success')
    )
    .catch(
      error => console.error('Error en la promesa', error)
    );

  }

  ngOnInit() {
  }


  contarTres() {
    //estructura para instanciar una promesa
    return new Promise( (resolve, reject) => {

                  let contador = 0;
                  let intervalo = setInterval( () => {
                    contador += 1;
                    console.log(contador);
                    if ( contador === 3 ) {
                      resolve();
                      clearInterval(intervalo);//detiene la promesa;
                    }
                  }, 1000);
    } );
  }

}
