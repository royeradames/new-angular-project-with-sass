import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksActionsComponent } from './tasks-actions.component';

describe('TasksActionsComponent', () => {
  let component: TasksActionsComponent;
  let fixture: ComponentFixture<TasksActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
