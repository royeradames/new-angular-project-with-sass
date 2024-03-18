import { Component } from '@angular/core'
import { NgForOf, NgOptimizedImage } from '@angular/common'
import { TodoAppService } from '../../todo-app.service'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  imports: [
    NgForOf,
    NgOptimizedImage,
  ],
  standalone: true,
})
export class TasksListComponent {
  itemList = this.todoAppService.itemList

  constructor(private todoAppService: TodoAppService) {
  }
}
