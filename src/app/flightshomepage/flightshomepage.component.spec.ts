import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightshomepageComponent } from './flightshomepage.component';

describe('FlightshomepageComponent', () => {
  let component: FlightshomepageComponent;
  let fixture: ComponentFixture<FlightshomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightshomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
