// Al momento de crear los componente (ng g c nombre-componente) se importan y se coloca su path

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewspageComponent } from './newspage/newspage.component';
import { TodopageComponent } from './todopage/todopage.component';
import { BitcoinpageComponent } from './bitcoinpage/bitcoinpage.component';


const routes: Routes = [
  {
    path: 'news-page',
    component: NewspageComponent
  },
  {
    path: 'todo-page',
    component: TodopageComponent
  },
  {
    path: 'bitcoin-page',
    component: BitcoinpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
