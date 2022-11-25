import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpharmacyComponent } from './viewpharmacy.component';

describe('ViewpharmacyComponent', () => {
  let component: ViewpharmacyComponent;
  let fixture: ComponentFixture<ViewpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
