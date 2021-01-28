import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  // tslint:disable-next-line:typedef
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  onToggle(todo): void {
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo): void {
    this.deleteTodo.emit(todo);
  }

}
