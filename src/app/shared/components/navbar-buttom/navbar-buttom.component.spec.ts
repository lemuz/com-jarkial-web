import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarButtomComponent } from './navbar-buttom.component';

describe('NavbarButtomComponent', () => {
  let component: NavbarButtomComponent;
  let fixture: ComponentFixture<NavbarButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarButtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
