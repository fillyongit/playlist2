import { Injectable } from '@angular/core';

function _window(): any {
  // return the native window obj
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() { }

  trans(headword: string): string {
    return _window().Translator.trans(headword);
  }
}
