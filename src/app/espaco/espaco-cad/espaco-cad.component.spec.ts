import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacoCadComponent } from './espaco-cad.component';

describe('EspacoCadComponent', () => {
  let component: EspacoCadComponent;
  let fixture: ComponentFixture<EspacoCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacoCadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacoCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
