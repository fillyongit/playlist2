import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Song } from '../song';

import { WindowService } from '../window.service';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  	songs: Song[];

  	selectedSong: Song;

  	constructor(
                private windowService: WindowService, 
                private localization: LocalizationService,
                private songService: SongService
    ) { 
      console.log(windowService.nativeWindow._app.saveUrl);
  	}

  	ngOnInit() {
      // console.log(jQuery);
      this.getSongs();
  	}

  	onSelect(song: Song): void {
  		this.selectedSong = song;
	  }

    getSongs(): void {
      this.songService.getSongs().subscribe(songs => this.songs = songs);
    }
}
