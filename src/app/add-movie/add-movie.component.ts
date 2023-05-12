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
  isFormValid: boolean = false;

  constructor(private movieService: MovieService) {}

  addMovie() {
    const newMovieId = this.generateUniqueId();
    this.newMovie.id = newMovieId;
    this.movieService.addMovie(this.newMovie);
    this.newMovie = new Movie();
    this.isFormValid = false;
  }

  private generateUniqueId(): number {
    const highestId = Math.max(
      ...this.movieService.getMovies().map((movie) => movie.id)
    );
    return highestId + 1;
  }

  validateForm() {
    this.isFormValid =
      !!this.newMovie.title &&
      !!this.newMovie.director &&
      !!this.newMovie.releaseYear &&
      !!this.newMovie.description &&
      !!this.newMovie.posterUrl &&
      !!this.newMovie.genre;
  }
}
