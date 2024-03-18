import { Component } from '@angular/core'
import { NgClass, NgIf } from '@angular/common'

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss'],
  imports: [
    NgClass,
    NgIf,
  ],
  standalone: true,
})
export class TasksActionsComponent {
  showClearCompleted = false
  showingCompleted = false
  showingActive = false
  showingAll = true

  showAll($event: MouseEvent) {
    $event.preventDefault()
    this.showingAll = true
    this.showingCompleted = false
    this.showingActive = false
  }

  showActive($event: MouseEvent) {
    $event.preventDefault()
    this.showingAll = false
    this.showingCompleted = false
    this.showingActive = true
  }

  showCompleted($event: MouseEvent) {
    $event.preventDefault()
    this.showingAll = false
    this.showingCompleted = true
    this.showingActive = false
  }
}
