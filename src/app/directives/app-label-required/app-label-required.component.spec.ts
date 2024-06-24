import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLabelRequiredComponent } from './app-label-required.component';

describe('AppButtonComponent', () => {
  let component: AppLabelRequiredComponent;
  let fixture: ComponentFixture<AppLabelRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLabelRequiredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLabelRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
