import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaybyInfoComponent } from './location-info.component';

describe('LaybyInfoComponent', () => {
  let component: LaybyInfoComponent;
  let fixture: ComponentFixture<LaybyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaybyInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaybyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
