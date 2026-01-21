// app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./businesslogic/product-list/product-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParentComponent } from "./component/parent.component";
import { ReusableComponent } from "./component/reusable.component";
import { SmartComponent } from "./component/smart.component";
import { ContentProjectionComponent } from "./component/content-projection.component";
import { TemplateOutletComponent } from "./component/template-outlet.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { ReUseComponent } from "./resuable/re-use/re-use.component";
import { PComponent } from "./parent-child/p.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    RouterModule,
    HttpClientModule, PComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular_task';


    data: any;
    loading = false;
    error: string | null = null;

    constructor(private http: HttpClient) {
      this.fetchData();
    }

    fetchData() {
      this.loading = true;
      this.http.get('https://jsonplaceholder.typicode.com/posts')
        .subscribe({
          next: (response) => {
            this.data = response;
            this.loading = false;
          },
          error: (err) => {
            this.error = err.message;
            this.loading = false;
          }
    });
  }
}
