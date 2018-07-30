import { Component, OnInit, Input } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { TodoService } from './services/todo.service';


@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css'],
  providers:   [TodoService]
})
export class TodopageComponent implements OnInit {
private todoText: string;

constructor(private todoService: TodoService) {
 this.todoText = '';
}

ngOnInit() {
}

private addTask(): void {
  // console.log('todo: ', this.todoText);
  this.todoService.addTask(this.todoText);
  this.todoText = '';
}

  // private arrItem: any[] = [];
  // task = new FormControl('');

  // onSubmit() {
  //   const saveItem = this.task.value;
  //   console.log(saveItem);
  //   this.arrItem.push(saveItem);
  //   localStorage.setItem('items', JSON.stringify(this.arrItem));
  // }

  // getLocal() {
  //   const getItem = JSON.parse(localStorage.getItem('items'));
  //   console.log(getItem);
  // }

}
