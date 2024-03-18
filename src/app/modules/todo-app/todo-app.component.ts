import { Component, Inject, Renderer2 } from '@angular/core'
import { DOCUMENT, NgClass, NgForOf, NgOptimizedImage } from '@angular/common'
import { ThemeService } from '../../core/services/theme.service'
import { Subscription } from 'rxjs'
import { IImage } from '../../core/interfaces/image.interface'
import { TasksInputComponent } from './tasks/tasks-input/tasks-input.component'
import { TasksComponent } from './tasks/tasks.component'

export interface ITodoList {
  name: string
  isCompleted: boolean
}

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
  imports: [
    NgClass,
    NgForOf,
    TasksInputComponent,
    NgOptimizedImage,
    TasksComponent,
  ],
  standalone: true,
})
export class TodoAppComponent {
  isDarkMode = this.themeService.isDarkMode.value
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
  private themeSubscription!: Subscription

  get itemLeft() {
    const itemLeft = this.itemList.length + 1
    return itemLeft
  }

  get themeModeImage() {
    const lightThemeModeImage: IImage = {
      href: 'assets/images/todo-app/icon-sun.svg',
      alt: 'Sun',
    }
    const darkThemeModeImage: IImage = {
      href: 'assets/images/todo-app/icon-moon.svg',
      alt: 'Moon',
    }
    const themeModeImage = this.isDarkMode ? lightThemeModeImage : darkThemeModeImage
    return themeModeImage
  }

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkMode.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode
      if (isDarkMode) {
        this.renderer.addClass(this.document.body, 'dark-mode')
        this.renderer.removeClass(this.document.body, 'light-mode')
        return
      }
      this.renderer.removeClass(this.document.body, 'dark-mode')
      this.renderer.addClass(this.document.body, 'light-mode')
    })
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe()
  }

  toggleThemeMode($event: MouseEvent, isDarkMode: boolean) {
    $event.preventDefault()
    this.themeService.isDarkMode.next(!isDarkMode)
  }
}
