import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  tasks = [{ name: 'Learn Angular', completed: false }];
  newTask = '';
  filter = 'all';
  taskColor = 'blue';
  fontSize = 16;

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTaskStatus(task: { name: string; completed: boolean }) {
    task.completed = !task.completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  filteredTasks() {
    switch (this.filter) {
      case 'completed':
        return this.tasks.filter(task => task.completed);
      case 'incomplete':
        return this.tasks.filter(task => !task.completed);
      default:
        return this.tasks;
    }
  }

  toggleTaskColor() {
    this.taskColor = this.taskColor === 'blue' ? 'green' : 'blue';
  }

  increaseFontSize() {
    this.fontSize += 2;
  }
}
