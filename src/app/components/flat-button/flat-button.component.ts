import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent implements OnInit {

  @Input() text: string = 'NULL';
  @Input() color: string = 'black';
  @Input() icon: string = 'add';

  constructor() { }

  ngOnInit() {
  }

}
