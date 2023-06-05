import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeworkersListComponent } from './freeworkers-list.component';

describe('FreeworkersListComponent', () => {
  let component: FreeworkersListComponent;
  let fixture: ComponentFixture<FreeworkersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeworkersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeworkersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
