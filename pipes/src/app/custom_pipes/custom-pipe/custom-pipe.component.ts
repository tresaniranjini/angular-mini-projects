import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter-pipe.pipe';
import { TextTransformPipe } from '../text-transform.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CommonModule, FilterPipe, TextTransformPipe, FormsModule],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss'
})
export class CustomPipeComponent implements OnInit {

  searchTerm = '';
  items = ['apple', 'banana', 'orange', 'grapes', 'strawberry'];
  text = 'hello world from angular';

  constructor() {}

  ngOnInit(): void {}
}
