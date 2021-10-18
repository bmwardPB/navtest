import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompaComponent } from './subcompa.component';

describe('SubcompaComponent', () => {
  let component: SubcompaComponent;
  let fixture: ComponentFixture<SubcompaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcompaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcompaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
