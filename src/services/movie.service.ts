import { Injectable } from '@angular/core';
import { Movie } from '../app/models/movie.model'; // Update the import path

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releaseYear: 1994,
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      artworkUrl:
        'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    },
    {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      releaseYear: 1972,
      description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      artworkUrl:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      releaseYear: 1994,
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      artworkUrl:
        'https://mindreels.files.wordpress.com/2014/07/pulpfiction1994.jpg',
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
