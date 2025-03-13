import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePicPageComponent } from './change-pic-page.component';

describe('ChangePicPageComponent', () => {
  let component: ChangePicPageComponent;
  let fixture: ComponentFixture<ChangePicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePicPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
