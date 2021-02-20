import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprojectComponent } from './modalproject.component';

describe('ModalprojectComponent', () => {
  let component: ModalprojectComponent;
  let fixture: ComponentFixture<ModalprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
