import { Component } from '@angular/core';

@Component({
  //binds the component to the HTML template
  selector: 'app-root',

  //where that HTML file is
  templateUrl: './app.component.html',

  //the CSS that goes with that HTML file
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //declaring a string variable
  title: string;

  //statically assigning title
  constructor() {
    this.title = 'Spring Boot - Angular Application'
  }
}
