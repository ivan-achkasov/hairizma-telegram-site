import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./logon/login/login.component";
import { NotFoundPageComponent } from "./default/not-found-page/not-found-page.component";
import { ProductsComponent } from "./products/products.component";
import { AuthGuardService } from "./_services/auth-guard.service";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product', canActivate: [AuthGuardService], component: ProductsComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
