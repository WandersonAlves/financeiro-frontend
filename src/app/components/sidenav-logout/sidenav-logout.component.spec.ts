import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLogoutComponent } from './sidenav-logout.component';

describe('SidenavLogoutComponent', () => {
  let component: SidenavLogoutComponent;
  let fixture: ComponentFixture<SidenavLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
