import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assessment';
}
