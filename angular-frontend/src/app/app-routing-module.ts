import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Frontpage} from './components/frontpage/frontpage';
import {Dev} from './components/dev/dev';
import {Cook} from './components/cook/cook';

const routes: Routes = [
  {path: '', component: Frontpage},
  {path: 'front-page', component: Frontpage},
  {path: 'dev', component: Dev},
  {path: 'cook', component: Cook},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
