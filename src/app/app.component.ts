import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = [{ title: 'ejemplo', desc: 'descripcion' }];
  error: String = '';

  deleteTask(user: String) {
    for (let i = 0; i < this.task.length; i++) {
      if (this.task[i].title == user) {
        this.task.splice(i, 1);
      }
    }
  }

  addTask(title: any, desc: any) {
    if (title.value.trim() === '' || desc.value.trim() === '') {
      this.error = 'agrega una tarea';
    } else {
      this.task.push({ title: title.value, desc: desc.value });

      this.error = '';
    }
    return false;
  }

  
}
