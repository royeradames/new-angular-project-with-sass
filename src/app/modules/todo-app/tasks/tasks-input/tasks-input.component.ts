import { Component } from '@angular/core'
import { TodoAppService } from '../../todo-app.service'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { ITodoList } from '../../todo-app.component'

@Component({
  selector: 'app-tasks-input',
  templateUrl: './tasks-input.component.html',
  styleUrls: ['./tasks-input.component.scss'],
  imports: [
    ReactiveFormsModule,
  ],
  standalone: true,
})
export class TasksInputComponent {
  task = new FormControl('', { nonNullable: true })

  constructor(private todoAppService: TodoAppService) {
  }

  createNewTask() {
    const newTask: ITodoList = {
      name: this.task.value,
      isCompleted: false,
    }
    this.todoAppService.addTask(newTask)
    this.task.reset()
  }
}
