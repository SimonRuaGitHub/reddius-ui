import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubreddiusComponent } from './create-subreddius.component';

describe('CreateSubreddiusComponent', () => {
  let component: CreateSubreddiusComponent;
  let fixture: ComponentFixture<CreateSubreddiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubreddiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubreddiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
