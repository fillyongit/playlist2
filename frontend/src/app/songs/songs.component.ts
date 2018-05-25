import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';
// import { app } from '../namespace';

import { WindowService } from '../window.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  	songs = SONGS;

  	selectedSong: Song;

  	constructor(private windowService: WindowService) { 
      console.log(windowService.nativeWindow._app.saveUrl);
  	}

  	ngOnInit() {
  		//console.log(SONGS);
  		// this.songs = SONGS;
  		// console.log(window._app.saveUrl);
      // console.log(jQuery);
      // console.log(Translator.trans('title.songs'));
  	}

  	onSelect(song: Song): void {
  		this.selectedSong = song;
	}

}
