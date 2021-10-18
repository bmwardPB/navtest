import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompcComponent } from './subcompc.component';

describe('SubcompcComponent', () => {
  let component: SubcompcComponent;
  let fixture: ComponentFixture<SubcompcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcompcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcompcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
