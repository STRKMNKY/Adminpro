import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable'; //libreria necesaria para observables
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscribtion: Subscription; /*Atributo para poder aplicar el unsubscribe */
  constructor() {
  /*Observables: estructura paa instanciar
    observer: de tipo subscriber*/
    //escuchar observador
    this.subscribtion = this.regresaObservable()/*.pipe(
      retry(2) //simplemente pasamos dentro del pipe la funcion retry() como parametro enviamos el numero de veces a reintentar
    )*/
    .subscribe(
      numero => console.log( numero ),                       // 1. llega informacion del observable
      error => console.error( 'Ocurrio un error: ', error ), // 2. ocurre un error
      () => console.log( 'EL observable termino' )           // 3. se detecta observer.complete
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    /*Aqui haremos el unsubscribe*/
    this.subscribtion.unsubscribe();
  }
  /*funcion que regresa un observable*/
  /*Se puede poner el tipo de dato que regresa el observable en este caso un numero*/
  regresaObservable(): Observable<any> {
    let contador = 0;
    return new Observable( (observer: Subscriber<any>) => {
          let intervalo = setInterval( () => {
            contador += 1;
            const salida = {
              value: contador
            };
            observer.next( salida ); //Concluir observable: esta linea notifica cada que llega información
            //if ( contador === 3 ) {
            //  clearInterval( intervalo );
            //observer.complete();
            //}
          }, 1000);
    } ).pipe(
      map( resp => resp.value )
      //filter( (resp, index) => { /*Filter forsozamente regresa un true o un false*/
      //  if ( (valor % 2) === 1 ) {
      //    return true;
      //  } else {
      //    return false;
      //  }   /*resibe la respuesta y un index*/
      //})
    );
  }

}
