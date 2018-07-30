import { Injectable } from '@angular/core';
import { Todo } from '../../classes/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'Reporte'),
      new Todo(1, 'Curso'),
      new Todo(2, 'Platica')
    ];
    this.nextId = 3;
   }
   public addTask(text: string): void {
    //  console.log(this.todos);
     const todo = new Todo(this.nextId, text);
     this.todos.push(todo);
     this.nextId++;
     console.log(this.todos);
   }
   public getTodos(): Todo[] {
     return this.todos;
   }

   public removeTodo(id: number): void {
     this.todos = this.todos.filter((todo) => todo.id !== id);
   }
}
