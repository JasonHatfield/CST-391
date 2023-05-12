export class Movie {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  description: string;
  posterUrl: string;
  genre: string;

  constructor(
    id?: number,
    title?: string,
    director?: string,
    releaseYear?: number,
    description?: string,
    posterUrl?: string,
    genre?: string
  ) {
    this.id = id || 0;
    this.title = title || '';
    this.director = director || '';
    this.releaseYear = releaseYear || 0;
    this.description = description || '';
    this.posterUrl = posterUrl || '';
    this.genre = genre || '';
  }
}
