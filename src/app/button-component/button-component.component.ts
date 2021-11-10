import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
@BuilderBlock({
  tag: 'button-thing',
  name: 'button set',
  inputs: [
    {
      name: 'buttonname',
      type: 'string',
    },
    {
      name: 'buttonlink',
      type: 'url',
    },
    {
      name: 'buttonlink',
      type: 'url',
    },
    {
      name: 'buttonlink',
      type: 'url',
    },
    {
      name: 'buttonlink',
      type: 'url',
    },
  ],
})

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  //template: 'Button name : ',
  styleUrls: ['./button-component.component.css'],
})

export class ButtonComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  myFunc(){
    window.alert("Button works!!:)");
  }

  contentLoaded(data) {
    // Data object (via the output $event) includes your custom fields, e.g. if you have a custom field named
    // "title"
    //buttonname = data.data.buttonname
  }
  
}
