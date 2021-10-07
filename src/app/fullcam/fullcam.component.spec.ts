import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcamComponent } from './fullcam.component';

describe('FullcamComponent', () => {
  let component: FullcamComponent;
  let fixture: ComponentFixture<FullcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
