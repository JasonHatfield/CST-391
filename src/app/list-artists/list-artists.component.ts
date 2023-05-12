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
    console.log('Getting data....');
    this.service.getArtists(
      (artists: Artist[]) => {
        this.artists = artists;
        this.loadingMsg = null;
        console.log('this.artists', this.artists);
      },
      (error) => {
        console.error('Error fetching artists:', error);
        this.loadingMsg =
          'Error loading artists. Please check the console for more details.';
      }
    );
  }

  public onSelectArtist(artistName: string) {
    console.log('Selected Artist: ' + artistName);
    this.selectedArtist = new Artist(-1, artistName);
  }
}
