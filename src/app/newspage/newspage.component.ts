import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
  providers: [ ServiceService ]

})
export class NewspageComponent {

 public items: any;
  constructor(private dataService: ServiceService ) {
    this.dataService.getConfig().
    subscribe(response => this.items = response
         , err => {
      console.log('Something went wrong ', err);
    });
  }
}
