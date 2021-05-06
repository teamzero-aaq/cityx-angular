import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { JoinNamePipe } from './join-name.pipe';
import { JoinNameComponent } from './join-name.component';
import { AddCommentComponent } from './MyComponents/comments/add-comment/add-comment.component';
import { EditCommentComponent } from './MyComponents/comments/edit-comment/edit-comment.component';
import { ViewCommentComponent } from './MyComponents/comments/view-comment/view-comment.component';
import { AddSightComponent } from './MyComponents/sights/add-sight/add-sight.component';
import { DeleteSightComponent } from './MyComponents/sights/delete-sight/delete-sight.component';
import { ViewSightComponent } from './MyComponents/sights/view-sight/view-sight.component';
import { EditSightComponent } from './MyComponents/sights/edit-sight/edit-sight.component';
import { LoginComponent } from './MyComponents/users/login/login.component';
import { RegisterComponent } from './MyComponents/users/register/register.component';
import { ShowSightComponent } from './MyComponents/sights/show-sight/show-sight.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MousehoverDirective } from './MyDirective/mousehover.directive';
import { StoreComponent } from './MyComponents/shopping/store/store.component';
import { CartComponent } from './MyComponents/shopping/cart/cart.component';
import { CustomStructuralDirective } from './MyDirective/custom-structural.directive';
import { LocationPipe } from './MyPipes/location.pipes';
import { LowerCasePipe } from '@angular/common';
import { CustomLowercasePipe } from './MyPipes/custom_lowercase.pipes';

@NgModule({
  declarations: [
    AppComponent,
    JoinNamePipe,
    JoinNameComponent,
    AddCommentComponent,
    EditCommentComponent,
    ViewCommentComponent,
    AddSightComponent,
    DeleteSightComponent,
    ViewSightComponent,
    EditSightComponent,
    LoginComponent,
    RegisterComponent,
    ShowSightComponent,
    NotFoundComponent,
    HomeComponent,
    MousehoverDirective,
    StoreComponent,
    CartComponent,
    CustomStructuralDirective,
    LocationPipe,
    CustomLowercasePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LowerCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
