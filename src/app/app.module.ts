import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from'@angular/forms';

import { CountingComponent } from './counting/counting.component'
import { Lab4Component } from './lab4/lab4.component'

import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { CategoryMenuComponent } from './category-menu-component/category-menu-component';
import { ToDoListComponent } from './to-do-list-component/to-do-list-component'


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    CountingComponent,
    Lab4Component,

    NavbarComponent,

    SearchBarComponent,

    TopBannerComponent,

    CategoryMenuComponent,

    ToDoListComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
