import { Component } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common'
import { TasksInputComponent } from './tasks-input/tasks-input.component'
import { TodoAppService } from '../todo-app.service'
import { TasksListComponent } from './tasks-list/tasks-list.component'
import { TasksActionsComponent } from './tasks-actions/tasks-actions.component'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  imports: [
    NgForOf,
    NgOptimizedImage,
    TasksInputComponent,
    TasksListComponent,
    TasksActionsComponent,
  ],
  standalone: true,
})
export class TasksComponent {

}
