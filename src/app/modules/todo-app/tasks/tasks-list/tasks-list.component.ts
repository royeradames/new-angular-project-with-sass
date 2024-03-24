import { Component } from '@angular/core';
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgOptimizedImage,
} from '@angular/common';
import { TodoAppService } from '../../todo-app.service';
import { IImage } from '../../../../core/interfaces/image.interface';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
@Component(
  {
    selector:
      'app-tasks-list',
    templateUrl:
      './tasks-list.component.html',
    styleUrls:
      [
        './tasks-list.component.scss',
      ],
    imports:
      [
        NgForOf,
        NgOptimizedImage,
        NgClass,
        DragDropModule,
        AsyncPipe,
      ],
    standalone:
      true,
  }
)
export class TasksListComponent {
  itemList =
    this
      .todoAppService
      .displayingItems;

  getCheckBoxImage(
    isCompleted: boolean
  ) {
    const checkImage: IImage =
      {
        href: 'assets/images/todo-app/checkbox-checked.svg',
        alt: 'Checked box',
      };
    const uncheckImage: IImage =
      {
        href: 'assets/images/todo-app/checkbox-unchecked.svg',
        alt: 'unchecked box',
      };
    const getCheckBoxImage =
      isCompleted
        ? checkImage
        : uncheckImage;
    return getCheckBoxImage;
  }
  constructor(
    private todoAppService: TodoAppService
  ) {}

  toggleCompletionFlag(
    $event: MouseEvent,
    index: number
  ) {
    $event.preventDefault();
    this.todoAppService.toggleCompletionFlag(
      index
    );
  }

  handleDelete(
    $event: MouseEvent,
    index: number
  ) {
    $event.preventDefault();
    this.todoAppService.removeTask(
      index
    );
  }

  drop(
    event: CdkDragDrop<
      string[]
    >
  ) {
    moveItemInArray(
      this
        .itemList
        .value,
      event.previousIndex,
      event.currentIndex
    );
  }
}
