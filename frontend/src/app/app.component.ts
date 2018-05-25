import { Component } from '@angular/core';
import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title = 'app';

    constructor(private windowService: WindowService) { 
  	}
}
