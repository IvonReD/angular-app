import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { TwoTodoService } from './services/two-todo.service.ts';



@Component({
  selector: 'app-todo-two',
  templateUrl: './todo-two.component.html',
  styleUrls: ['./todo-two.component.css']
})
export class TodoTwoComponent  {

  task = new FormGroup({
    activity: new FormControl(''),
    description: new FormControl('')
  });



onSubmit() {
  // TODO: Use EventEmitter with form value
  // console.log(this.task.value);
  const saveItem = this.task.value;
  console.log(saveItem);
  // this.saveDate(saveItem);
}

saveDate(saveItem) {
//   const item = saveItem;
//   localStorage.setItem('ite', JSON.stringify(item));
// }

}
}
