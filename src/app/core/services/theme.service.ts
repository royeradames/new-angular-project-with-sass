import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = new BehaviorSubject<boolean>(true);

}
