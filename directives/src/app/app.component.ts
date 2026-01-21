import { Component } from '@angular/core';
import { TaskComponent } from "./directives/task/task.component";
import { CardDisplayComponent } from "./custom_directives/card-display/card-display.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent, CardDisplayComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskManagerApp';
}
