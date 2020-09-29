import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGalerieComponent } from './page-galerie.component';

describe('PageGalerieComponent', () => {
  let component: PageGalerieComponent;
  let fixture: ComponentFixture<PageGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGalerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
