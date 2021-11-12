import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BuilderModule } from '@builder.io/angular';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    BuilderModule.forRoot('fb39763560ba4c39959923ab41e49eec')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
