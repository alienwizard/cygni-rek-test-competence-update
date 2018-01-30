// @ts-ignore;
declare const module: any;
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,  
  selector: 'app-main',
  styleUrls: [
    './styles/app.component.scss',
    './styles/app.layout.scss',
    './styles/app.utils.scss'
  ],
  templateUrl: './app.component.html'
})

class AppComponent {
  name = 'testasda';
  constructor() {}
}

export default AppComponent;