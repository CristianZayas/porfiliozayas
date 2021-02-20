import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalskillsetComponent } from './modalskillset.component';

describe('ModalskillsetComponent', () => {
  let component: ModalskillsetComponent;
  let fixture: ComponentFixture<ModalskillsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalskillsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalskillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
