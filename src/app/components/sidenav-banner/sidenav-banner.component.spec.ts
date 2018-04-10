import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBannerComponent } from './sidenav-banner.component';

describe('SidenavBannerComponent', () => {
  let component: SidenavBannerComponent;
  let fixture: ComponentFixture<SidenavBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
