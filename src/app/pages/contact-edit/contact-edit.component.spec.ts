import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetEditComponent } from './contact-edit.component';

describe('PetEditComponent', () => {
  let component: PetEditComponent;
  let fixture: ComponentFixture<PetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
