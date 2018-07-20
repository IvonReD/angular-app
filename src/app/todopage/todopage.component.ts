import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-todopage',
  templateUrl: './todopage.component.html',
  styleUrls: ['./todopage.component.css']
})
export class TodopageComponent implements OnInit {
  _fb: any;
  nameForm: FormGroup;
  task: String = '';
  description: String = '';
  post: any;
  arrayitems: any[] = [];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.nameForm = this.fb.group({
      task: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      description: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      // items: this.fb.array([this.saveDataLocal()])
      arrayitems: this._fb.array([this.saveDataLocal()])
  });
  console.log(this.nameForm.value);
}

saveDataLocal() {
  return this._fb.group({
    name: '',
    description: '',
    itemname: ['']
  });
}

addNewData() {
  const control = <FormArray>this.nameForm.controls['items'];
  control.push(this.saveDataLocal());
}

deleteRow(index: number){
  const control = <FormArray>this.nameForm.controls['arrayitems'];
  control.removeAt(index);
}


// saveDataLocal(): FormGroup {
//    return this.fb.group({
//      name: '',
//      description: '',
//    });
//  }

//  addItem(): void {
//    this.items = this.nameForm.get('items') as FormArray;
//    this.items.push(this.saveDataLocal());
//  }

// saveDataLocal() {
//   const arrayForm = new FormArray();
//   console.log(this.nameForm);
//    const obje = JSON.stringify(this.nameForm.value);
//    arrayForm.push('hola');
//    console.log(obje);
//    this.nameForm.reset();  //------- resert()--> metodo para limpiar los input al momento de enviar los datos
//    this.drawItem();
//   }
//  drawItem() {
//    const getObj = localStorage.getItem('formObj');
//    const itemObj = JSON.parse(getObj);
    // console.log(itemObj);
    // this.task = itemObj.task;
    // this.description = itemObj.description;
//  }

}
