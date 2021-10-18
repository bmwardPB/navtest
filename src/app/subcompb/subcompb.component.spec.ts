import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompbComponent } from './subcompb.component';

describe('SubcompbComponent', () => {
  let component: SubcompbComponent;
  let fixture: ComponentFixture<SubcompbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcompbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcompbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
