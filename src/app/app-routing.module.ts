import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DiscountedProductsComponent} from './products/discounted-products/discounted-products.component'
import {NonDiscountedProductsComponent} from './products/non-discounted-products/non-discounted-products.component'
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  // Redirect route Components
  {path: '', component:MainComponent},
  // our routes
  {path: 'main', component:MainComponent},
  {path: 'products', component:ProductsComponent,
  children: [
    { path: '', redirectTo: 'discounted', pathMatch: 'full' },
    { path: 'discounted', component: DiscountedProductsComponent },
    { path: 'non-discounted', component: NonDiscountedProductsComponent }
  ]},
  {path: 'users', component:UsersComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'login', component:LoginFormComponent},
  {path: 'register', component:RegisterFormComponent},
  {path: 'comments/:id', component:CommentsComponent},
  //Wildcard Route in Angular
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
