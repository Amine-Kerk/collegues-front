import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerCollegueComponent } from './supprimer-collegue.component';

describe('SupprimerCollegueComponent', () => {
  let component: SupprimerCollegueComponent;
  let fixture: ComponentFixture<SupprimerCollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerCollegueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
