import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { config } from './config';
 //+ (environment.production ? '.prod' : '');

function _window(): any {
  // return the native window obj
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  get nativeWindow(): any {
    return _window();
  }

  get translator(): any {
    return _window().Translator;
  }

  getParam(paramName: string): string {
    return (config.hasOwnProperty(paramName) ? config[paramName] : _window()._app[paramName]);
  }
}