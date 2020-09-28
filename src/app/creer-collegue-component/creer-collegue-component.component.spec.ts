import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCollegueComponentComponent } from './creer-collegue-component.component';

describe('CreerCollegueComponentComponent', () => {
  let component: CreerCollegueComponentComponent;
  let fixture: ComponentFixture<CreerCollegueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerCollegueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCollegueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
