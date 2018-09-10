import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percentB: number = 90;
  percentG: number = 20;

  constructor() { }

  ngOnInit() {
  }
}
