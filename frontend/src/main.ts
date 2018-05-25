import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as jquery from 'jquery';
window['jQuery'] = window['$'] = jquery;

import * as popper from 'popper.js';
window['Popper'] = popper;

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid.faPencilAlt);
fontawesome.library.add(solid.faTrash);
fontawesome.library.add(solid.faHeadphones);
fontawesome.library.add(solid.faPlay);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));