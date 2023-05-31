import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDasboardComponent } from './ad-dasboard.component';

describe('AdDasboardComponent', () => {
  let component: AdDasboardComponent;
  let fixture: ComponentFixture<AdDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
