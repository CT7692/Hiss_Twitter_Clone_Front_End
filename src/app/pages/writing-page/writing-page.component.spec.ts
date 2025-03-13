import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingPageComponent } from './writing-page.component';

describe('WritingPageComponent', () => {
  let component: WritingPageComponent;
  let fixture: ComponentFixture<WritingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
