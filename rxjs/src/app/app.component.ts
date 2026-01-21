import { Component } from '@angular/core';
import { FilterComponent } from "./operators/filter/filter-component";
import { ForkJoinComponent } from "./operators/forkjoin/forkjoin-component";
import { MapComponent } from "./operators/map/map-component";
import { MergeMapComponent } from "./operators/mergemap/mergemap-component";
import { TapComponent } from "./operators/tap/tap-component";
import { SwitchMapComponent } from "./operators/switchmap/switchmap-component";
import { OfComponent } from "./operators/of/of-component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilterComponent, ForkJoinComponent, MapComponent, MergeMapComponent, TapComponent, SwitchMapComponent, OfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs';
}
