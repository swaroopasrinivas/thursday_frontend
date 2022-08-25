import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcComponent } from './registrationc.component';

describe('RegistrationcComponent', () => {
  let component: RegistrationcComponent;
  let fixture: ComponentFixture<RegistrationcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
