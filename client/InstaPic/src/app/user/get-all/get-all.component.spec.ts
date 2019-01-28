import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllComponent } from './get-all.component';

describe('GetAllComponent', () => {
  let component: GetAllComponent;
  let fixture: ComponentFixture<GetAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
