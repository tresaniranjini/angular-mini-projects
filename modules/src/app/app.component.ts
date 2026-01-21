import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { SharedComponent } from './shared/shared.component';
import { ListComponent } from './feature/list/list.component';
import { FormComponent } from "./feature/form/form.component";
import { HttprequestComponent } from "./httprequest/httprequest.component";
import { SharedButtonComponent } from "./shared/shared-button/shared-button.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FeatureComponent, SharedComponent, FormComponent, ListComponent, HttprequestComponent, SharedButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
