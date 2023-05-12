import { Injectable } from '@angular/core';
import { Movie } from '../app/models/movie.model';

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    new Movie(
      1,
      'The Shawshank Redemption',
      'Frank Darabont',
      1994,
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      ''
    ),
    new Movie(
      2,
      'The Godfather',
      'Francis Ford Coppola',
      1972,
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
      ''
    ),
    new Movie(
      3,
      'Pulp Fiction',
      'Quentin Tarantino',
      1994,
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      'https://mindreels.files.wordpress.com/2014/07/pulpfiction1994.jpg',
      ''
    ),
  ];

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }
}
