import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';

// Importar el modulo de Http
import { HttpClientModule } from '@angular/common/http';

// Modulo donde se coloca los componente de material
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewspageComponent } from './newspage/newspage.component';
import { TodopageComponent } from './todopage/todopage.component';
import { BitcoinpageComponent } from './bitcoinpage/bitcoinpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewspageComponent,
    TodopageComponent,
    BitcoinpageComponent
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
