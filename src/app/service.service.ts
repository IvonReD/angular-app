// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';


// Importamos los componentes que vamos a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';



// Permitimos que este objeto se pueda inyectar con la DI
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
   configUrl = 'http://node-hnapi.herokuapp.com/news';
  constructor(private http: HttpClient) { }
  getNews() {
    return this.http.get(this.configUrl);
  }

}


