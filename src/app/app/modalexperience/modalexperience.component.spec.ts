import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalexperienceComponent } from './modalexperience.component';

describe('ModalexperienceComponent', () => {
  let component: ModalexperienceComponent;
  let fixture: ComponentFixture<ModalexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalexperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
