import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRightColumnComponent } from './profile-right-column.component';

describe('ProfileRightColumnComponent', () => {
  let component: ProfileRightColumnComponent;
  let fixture: ComponentFixture<ProfileRightColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRightColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
