import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreddiusSideBarComponent } from './subreddius-side-bar.component';

describe('SubreddiusSideBarComponent', () => {
  let component: SubreddiusSideBarComponent;
  let fixture: ComponentFixture<SubreddiusSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubreddiusSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreddiusSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
