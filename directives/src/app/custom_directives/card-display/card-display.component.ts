import { ShowCardDirective } from '../showcard.directive';
import { CardHoverDirective } from '../cardhover.directive';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CommonModule, FormsModule, ShowCardDirective, CardHoverDirective],
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent {
  cards = [
    { title: 'Card 1', description: 'This is card 1', show: true },
    { title: 'Card 2', description: 'This is card 2', show: true },
    { title: 'Card 3', description: 'This is card 3', show: true }
  ];
}
