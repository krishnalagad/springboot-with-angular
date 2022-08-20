import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDashComponent } from './normal-dash.component';

describe('NormalDashComponent', () => {
  let component: NormalDashComponent;
  let fixture: ComponentFixture<NormalDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
