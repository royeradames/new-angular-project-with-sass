import { Component } from '@angular/core'
import { NgClass, NgForOf, NgOptimizedImage } from '@angular/common'
import { TodoAppService } from '../../todo-app.service'
import { IImage } from '../../../../core/interfaces/image.interface'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgClass,
  ],
  standalone: true,
})
export class TasksListComponent {
  itemList = this.todoAppService.itemList

  getCheckBoxImage(isCompleted: boolean) {
    const checkImage: IImage = {
      href: 'assets/images/todo-app/checkbox-checked.svg',
      alt: 'Checked box',
    }
    const uncheckImage: IImage = {
      href: 'assets/images/todo-app/checkbox-unchecked.svg',
      alt: 'unchecked box',
    }
    const getCheckBoxImage = isCompleted ? checkImage : uncheckImage
    return getCheckBoxImage
  }
  constructor(private todoAppService: TodoAppService) {
  }
}
