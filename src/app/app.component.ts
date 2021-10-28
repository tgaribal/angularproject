import { Component } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'custom-thing',
  name: 'Custom thing',
  inputs: [],
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';
}
