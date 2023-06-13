import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaCadastradosComponent } from './pages/lista-cadastrados/lista-cadastrados.component';
import { Route, RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';


const routes: Route[] = [
  {path: '',redirectTo: 'lista-cadastrados', pathMatch: 'full'},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'lista-cadastrados', component: ListaCadastradosComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    LoginComponent,
    ListaCadastradosComponent,
    NavbarComponent,
    MenuLinkComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
