import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public _searchQuery: string;

  private modelSubject: Subject<string> = new Subject<string>();

  @Output() searchQuery = new EventEmitter<string>();

  constructor() {
    this.modelSubject
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(value => this.searchQuery.emit(value))
  }

  ngOnInit() {
  }

  emitQuery(): void {
    this.modelSubject.next(this._searchQuery);
  }

}
