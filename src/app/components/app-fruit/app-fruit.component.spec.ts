import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFruitComponent } from './app-fruit.component';

describe('AppFruitComponent', () => {
  let component: AppFruitComponent;
  let fixture: ComponentFixture<AppFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFruitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
