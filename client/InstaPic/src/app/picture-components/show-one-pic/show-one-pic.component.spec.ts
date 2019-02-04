import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnePicComponent } from './show-one-pic.component';

describe('ShowOnePicComponent', () => {
  let component: ShowOnePicComponent;
  let fixture: ComponentFixture<ShowOnePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOnePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOnePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
