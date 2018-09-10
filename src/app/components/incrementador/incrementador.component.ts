import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() { }
  @Input() percent: number = 0;
  @Input() label: string = 'Etiqueta';
  @ViewChild('txtprogress') txtprogress: ElementRef;
  @Output() changePercent: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }
  onChange( newValue: number ) {

    if ( newValue >= 100 ) {
        this.percent = 100;
    } else {
      if (newValue <= 0 ) {
        this.percent = 0;
      } else {
        this.percent = newValue;
      }
    }
    this.txtprogress.nativeElement.value = this.percent;
    this.changePercent.emit(this.percent);


  }

  cambiarValor( num ) {
    this.percent = this.percent + num;
    if ( this.percent >= 100 ) {
      this.percent = 100;
    } else {
      if ( this.percent <= 0 ) {
        this.percent = 0;
      }
    }
    this.changePercent.emit(this.percent);
    //console.log(this.percent);
    }
}
