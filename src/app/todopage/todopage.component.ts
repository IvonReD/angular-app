import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent implements OnInit {
  formTask: FormGroup;

  constructor( private fb: FormBuilder) {
    this.formTask = this.fb.group({
      'task': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],

    });
  }

  ngOnInit() {
  }

}
