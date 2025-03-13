import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProfilePageComponent } from './single-profile-page.component';

describe('SingleProfilePageComponent', () => {
  let component: SingleProfilePageComponent;
  let fixture: ComponentFixture<SingleProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProfilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
