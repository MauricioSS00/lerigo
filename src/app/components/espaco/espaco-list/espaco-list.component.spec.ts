import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacoListComponent } from './espaco-list.component';

describe('EspacoListComponent', () => {
  let component: EspacoListComponent;
  let fixture: ComponentFixture<EspacoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
