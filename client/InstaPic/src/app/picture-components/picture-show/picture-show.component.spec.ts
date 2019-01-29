import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureShowComponent } from './picture-show.component';

describe('PictureShowComponent', () => {
  let component: PictureShowComponent;
  let fixture: ComponentFixture<PictureShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
