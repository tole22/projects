import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  domain = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>(`${this.domain}/api/tasks`)
    .pipe(map(res => res));
  }
  addTask(newTask: Task){
    return this.http.post(`${this.domain}/api/tasks`, newTask)
    .pipe(map(res => res));
  }
  deleteTask(id){
    return this.http.delete(`${this.domain}/api/tasks/${id}`)
    .pipe(map(res => res));
  }
  updateTask(newTask){
    return this.http.put(`${this.domain}/api/tasks/${newTask.id}`, newTask)
    .pipe(map(res => res));
  }
}
