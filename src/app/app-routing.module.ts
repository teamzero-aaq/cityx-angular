import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { CartComponent } from './MyComponents/shopping/cart/cart.component';
import { StoreComponent } from './MyComponents/shopping/store/store.component';

import { ShowSightComponent } from './MyComponents/sights/show-sight/show-sight.component';
import { ViewSightComponent } from './MyComponents/sights/view-sight/view-sight.component';
import { LoginComponent } from './MyComponents/users/login/login.component';
import { RegisterComponent } from './MyComponents/users/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sights', component: ShowSightComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sightView', component: ViewSightComponent },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
