import { Injectable } from '@angular/core';
import { ITodoList } from './todo-app.component';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {
    providedIn:
      'root',
  }
)
export class TodoAppService {
  allItems: ITodoList[] =
    [
      {
        name: 'Complete online JavaScript course',
        isCompleted:
          true,
      },
      {
        name: 'Jog around the park 3x',
        isCompleted:
          false,
      },
      {
        name: '10 minutes meditation',
        isCompleted:
          false,
      },
      {
        name: 'Read for 1 hour',
        isCompleted:
          false,
      },
      {
        name: 'Pick up groceries',
        isCompleted:
          false,
      },
      {
        name: 'Complete Todo App on Frontend Mentor',
        isCompleted:
          false,
      },
    ];
  displayingItems =
    new BehaviorSubject<
      ITodoList[]
    >(
      this.allItems
    );
  constructor() {}

  showAllItems() {
    this.displayingItems.next(
      this
        .allItems
    );
  }
  showActiveItems() {
    this.displayingItems.next(
      this.allItems.filter(
        item =>
          !item.isCompleted
      )
    );
  }
  showCompletedItems() {
    this.displayingItems.next(
      this.allItems.filter(
        item =>
          item.isCompleted
      )
    );
  }
  toggleCompletionFlag(
    index: number
  ) {
    const items =
      this
        .displayingItems
        .value;
    const currentTask =
      items[
        index
      ];
    const updatedItem =
      {
        ...currentTask,
        isCompleted:
          !currentTask.isCompleted,
      };
    items[
      index
    ] =
      updatedItem;

    this.displayingItems.next(
      items
    );
  }
  removeTask(
    index: number
  ) {
    const items =
      this
        .displayingItems
        .value;
    items.splice(
      index,
      1
    );
    this.displayingItems.next(
      items
    );
  }
  addTask(
    TodoItem: ITodoList
  ) {
    this.displayingItems.next(
      [
        ...this
          .displayingItems
          .value,
        TodoItem,
      ]
    );
  }
}
