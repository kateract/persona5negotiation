import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTypesComponent } from './answer-types.component';

describe('AnswerTypesComponent', () => {
  let component: AnswerTypesComponent;
  let fixture: ComponentFixture<AnswerTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
