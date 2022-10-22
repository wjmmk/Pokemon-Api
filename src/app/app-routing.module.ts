import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card-list/card.component';
import { DetailsComponent } from './components/card-details/details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth').then( m => m.AuthModule)},
  {path: 'home', component: CardComponent},
  {path: 'home/details/:id', component: DetailsComponent},
  {path: '**', redirectTo: '/auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
