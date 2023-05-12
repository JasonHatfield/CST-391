import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/Artist';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css'],
})
export class ListArtistsComponent implements OnInit {
  artists: Artist[] = [];
  selectedArtist: Artist | null = null;
  loadingMsg: string | null = 'Please wait… loading';

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Getting data....');
      this.service.getArtists((artists: Artist[]) => {
        this.artists = artists;
        this.selectedArtist = null;
        this.loadingMsg = null;
      });
    });
  }

  public onSelectArtist(artist: Artist) {
    console.log('Selected Artist: ' + artist.Name);
    this.selectedArtist = artist;
  }
}
