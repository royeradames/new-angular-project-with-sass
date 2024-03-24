import { Component } from '@angular/core';
import {
  NgClass,
  NgIf,
} from '@angular/common';
import { TodoAppService } from '../../todo-app.service';

@Component(
  {
    selector:
      'app-tasks-actions',
    templateUrl:
      './tasks-actions.component.html',
    styleUrls:
      [
        './tasks-actions.component.scss',
      ],
    imports:
      [
        NgClass,
        NgIf,
      ],
    standalone:
      true,
  }
)
export class TasksActionsComponent {
  showClearCompleted =
    false;
  showingCompleted =
    false;
  showingActive =
    false;
  showingAll =
    true;

  constructor(
    private todoAppService: TodoAppService
  ) {}

  showAll(
    $event: MouseEvent
  ) {
    $event.preventDefault();
    this.showingAll =
      true;
    this.showingCompleted =
      false;
    this.showingActive =
      false;
    this.todoAppService.showAllItems();
  }

  showActive(
    $event: MouseEvent
  ) {
    $event.preventDefault();
    this.showingAll =
      false;
    this.showingCompleted =
      false;
    this.showingActive =
      true;
    this.todoAppService.showActiveItems();
  }

  showCompleted(
    $event: MouseEvent
  ) {
    $event.preventDefault();
    this.showingAll =
      false;
    this.showingCompleted =
      true;
    this.showingActive =
      false;
    this.todoAppService.showCompletedItems();
  }
}
