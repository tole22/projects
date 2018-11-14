import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TasksService) {
    this.taskService.getTasks()
    .subscribe( tasks => {
      console.log(tasks);
    });
  }

  ngOnInit() {
  }

}
