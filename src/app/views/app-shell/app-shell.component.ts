import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ICurrentRouteBanner } from '../../interfaces/common.interface';
import { Subscription } from 'rxjs/Subscription';
import { EventObservableService } from '../../services/shared/observable.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  public routeBanner: ICurrentRouteBanner = {
    childrenRoute: '',
    mainRoute: ''
  }

  public subscription: Subscription;

  constructor(private location: Location, private eventObservable: EventObservableService) { 
    this.subscription = this.eventObservable.routeChange$.subscribe((value: ICurrentRouteBanner) => {
      this.routeBanner.childrenRoute = value.childrenRoute;
      this.routeBanner.mainRoute = value.mainRoute;
    });
  }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }

}
