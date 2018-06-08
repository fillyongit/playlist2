import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input() artist: Artist;

  constructor(private localization: LocalizationService) { }

  ngOnInit() {
  }

}
