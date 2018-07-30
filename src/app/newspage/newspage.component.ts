import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css'],
  providers: [ ServiceService ]

})
export class NewspageComponent implements OnInit {

  public news: any;

 constructor(private dataService: ServiceService) {
 }

 ngOnInit() {
   this.getNews();
 }
 public getNews() {
   this.dataService.getNews().subscribe((data: Array<object>) => {
     this.news = data,
     console.log(data);
   });
 }
}
 /* ---- Otra manera de ingresar y sacar los datos de la API ----*/

 //  public items: any;
  // constructor(private dataService: ServiceService) {
    // this.dataService.getConfig().
    // subscribe(response =>
    //   this.items = response
    //      , err => {
    //   console.log('Something went wrong ', err);
    // });
  // }


