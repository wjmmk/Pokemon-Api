import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: 'home', component: CardComponent},
  {path: 'home/details/:id', component: DetailsComponent},
  {path: '', pathMatch: 'full', component: CardComponent},
  {path: '**', pathMatch: 'full', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
