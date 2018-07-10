import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent implements OnInit {

  @Input() text = 'NULL';
  @Input() color = 'black';
  @Input() icon = 'add';

  constructor() { }

  ngOnInit() {
  }

}
