import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  newMovie: Movie = new Movie();

  constructor(private movieService: MovieService) {}

  addMovie() {
    const newMovieId = this.generateUniqueId();
    this.newMovie.id = newMovieId;
    this.movieService.addMovie(this.newMovie);
    this.newMovie = new Movie();
  }

  private generateUniqueId(): number {
    const highestId = Math.max(
      ...this.movieService.getMovies().map((movie) => movie.id)
    );
    return highestId + 1;
  }
}
