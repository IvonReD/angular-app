// importamos el modulo Injectable de AngularJS
import { Injectable } from '@angular/core';


// Importamos los componentes que vamos a usar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';



// Permitimos que este objeto se pueda inyectar con la DI
@Injectable()

export class ServiceService {
   configUrl = 'http://node-hnapi.herokuapp.com/news';
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.configUrl);
  }

}



