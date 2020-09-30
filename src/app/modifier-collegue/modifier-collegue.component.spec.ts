import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCollegueComponent } from './modifier-collegue.component';

describe('ModifierCollegueComponent', () => {
  let component: ModifierCollegueComponent;
  let fixture: ComponentFixture<ModifierCollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCollegueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
