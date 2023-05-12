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
  editMode: boolean = false;
  showPopup: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);
  }

  editMovie(): void {
    this.editMode = !this.editMode;
  }

  deleteMovie() {
    this.showPopup = true;
  }

  confirmDeleteMovie() {
    if (this.movie) {
      this.movieService.deleteMovie(this.movie.id);
      this.router.navigate(['/']);
    }
  }

  cancelDeleteMovie() {
    this.showPopup = false;
  }
}
