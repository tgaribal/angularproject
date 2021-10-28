import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BuilderModule } from '@builder.io/angular';
import { Builder } from '@builder.io/sdk';

Builder.isStatic = true;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BuilderModule.forRoot('fb39763560ba4c39959923ab41e49eec'),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatDividerModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
