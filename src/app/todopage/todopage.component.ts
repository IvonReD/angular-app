import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent implements OnInit {
  taskForm: FormGroup;
  task: String = '';
  description: String = '';
  post: any;
 public arrayItems: Array<any>;

  constructor(private fb: FormBuilder) {
    this.taskForm = fb.group({
      'task': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    });
    const arr = this.taskForm;
    console.log(arr);
    
  }

  ngOnInit() {
  }
  saveDataLocal() {
   const pushItem = this.arrayItems.push(this.taskForm);
   console.log(pushItem);
   
   const obje = localStorage.setItem('formObj', JSON.stringify(pushItem));
   console.log(obje);
   
   this.drawItem();
  }
 drawItem() {
   const getObj = localStorage.getItem('formObj');
   const itemObj = JSON.parse(getObj);
    // console.log(itemObj);
    this.task = itemObj.task;
    this.description = itemObj.description;
 }

}
