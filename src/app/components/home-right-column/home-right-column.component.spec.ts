import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRightColumnComponent } from './home-right-column.component';

describe('HomeRightColumnComponent', () => {
  let component: HomeRightColumnComponent;
  let fixture: ComponentFixture<HomeRightColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRightColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRightColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
