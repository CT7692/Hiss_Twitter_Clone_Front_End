import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePicComponent } from './change-pic.component';

describe('ChangePicComponent', () => {
  let component: ChangePicComponent;
  let fixture: ComponentFixture<ChangePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
