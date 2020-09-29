import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreerCollegueComponent } from './page-creer-collegue.component';

describe('PageCreerCollegueComponent', () => {
  let component: PageCreerCollegueComponent;
  let fixture: ComponentFixture<PageCreerCollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreerCollegueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreerCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
