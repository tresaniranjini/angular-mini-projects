// protected.component.ts
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanComponentDeactivate } from '../can-deactivate.guard'; // Import the interface


@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})

export class ProtectedComponent implements CanComponentDeactivate {
private hasChanges = false;

makeChanges() {
this.hasChanges = true; // Simulate changes made by the user
}

// Implement the canDeactivate method to check if the user has unsaved changes
canDeactivate(): boolean {
if (this.hasChanges) {
  return window.confirm('You have unsaved changes. Are you sure you want to leave?');
}
return true;
}
}
