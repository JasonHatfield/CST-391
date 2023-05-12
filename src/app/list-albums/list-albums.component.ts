import { Component, OnInit, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css'],
})
export class ListAlbumsComponent implements OnInit {
  @Input() artist: Artist;
  albums: Album[] = [];
  selectedAlbum: Album = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    console.log('Getting albums for artist:', this.artist.Name);
    this.service.getAlbums(this.artist.Name, (albums: Album[]) => {
      console.log('Fetched albums:', albums);
      this.albums = albums;
    });
  }

  public onSelectAlbum(album: Album) {
    console.log('Selected Album of ' + album.Title);
    this.selectedAlbum = album;
  }
}
