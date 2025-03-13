import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeftColumnComponent } from './profile-left-column.component';

describe('ProfileLeftColumnComponent', () => {
  let component: ProfileLeftColumnComponent;
  let fixture: ComponentFixture<ProfileLeftColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileLeftColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLeftColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
