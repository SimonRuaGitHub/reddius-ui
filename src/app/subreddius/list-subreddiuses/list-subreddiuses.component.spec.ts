import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubreddiusesComponent } from './list-subreddiuses.component';

describe('ListSubreddiusesComponent', () => {
  let component: ListSubreddiusesComponent;
  let fixture: ComponentFixture<ListSubreddiusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubreddiusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubreddiusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
