import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMeliComponent } from './form-meli.component';

describe('FormMeliComponent', () => {
  let component: FormMeliComponent;
  let fixture: ComponentFixture<FormMeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
