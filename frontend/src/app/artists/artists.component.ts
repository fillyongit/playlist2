import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';

import { ConfigService } from '../config.service';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  	artists: Artist[];

  	selectedArtist: Artist;

  	constructor(
                private configService: ConfigService, 
                private localization: LocalizationService,
                private artistService: ArtistService
    ) { 
      console.log(configService.getParam('env'));
  	}

  	ngOnInit() {
      // console.log(jQuery);
      this.getArtists();
  	}

  	onSelect(artist: Artist): void {
  		this.selectedArtist = artist;
	  }

    getArtists(): void {
      this.artistService.getArtists().subscribe(artists => this.artists = artists);
    }
}
