import { ProfileDisplayComponent } from './built-in-pipes/profile-display/profile-display.component';
import { Component } from '@angular/core';
import { CustomPipeComponent } from "./custom_pipes/custom-pipe/custom-pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileDisplayComponent, CustomPipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipes';
}
