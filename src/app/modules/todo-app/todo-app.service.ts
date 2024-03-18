import { Injectable } from '@angular/core';
import { ITodoList } from './todo-app.component'

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  itemList: ITodoList[] = [
    {
      name: 'Complete online JavaScript course',
      isCompleted: true,
    },
    {
      name: 'Jog around the park 3x',
      isCompleted: false,
    },
    {
      name: '10 minutes meditation',
      isCompleted: false,
    },
    {
      name: 'Read for 1 hour',
      isCompleted: false,
    },
    {
      name: 'Pick up groceries',
      isCompleted: false,
    },
    {
      name: 'Complete Todo App on Frontend Mentor',
      isCompleted: false,
    },
  ]
  constructor() { }
}
