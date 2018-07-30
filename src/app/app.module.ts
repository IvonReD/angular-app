import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';

// Importar el modulo de Http
import { HttpClientModule } from '@angular/common/http';

// Modulo donde se coloca los componente de material
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

// Importar el modulo de Formularios (FormBuilder)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Importar el Observable esta es para version 6 de angular
 (rxjs 6 alpha
   import { Observable, Subject, ReplaySubject } from 'rxjs';
   import { from, of, range } from 'rxjs/create';
   import { map, filter, switchMap } from 'rxjs/operators';)
para la 5(rxjs 5
    import { Observable } from 'rxjs/Observable';
    import 'rxjs/add/observable/of';
    import 'rxjs/add/operator/map';)*/

import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewspageComponent } from './newspage/newspage.component';
import { TodopageComponent } from './todopage/todopage.component';
import { BitcoinpageComponent } from './bitcoinpage/bitcoinpage.component';
import { TodoTwoComponent } from './todo-two/todo-two.component';

/*importar servicio de la seccion To DO */
import { TodoService } from './todopage/services/todo.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewspageComponent,
    TodopageComponent,
    BitcoinpageComponent,
    TodoTwoComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,

    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
