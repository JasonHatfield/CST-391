import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);
  }

  addMovie(): void {
    // Redirect to add-movie route
    this.router.navigate(['/add-movie']);
  }

  deleteMovie(): void {
    if (this.movie) {
      this.movieService.deleteMovie(this.movie.id);
      // Redirect to home route after deleting the movie
      this.router.navigate(['/']);
    }
  }
}
