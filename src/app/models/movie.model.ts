export class Movie {
  private _id: number;
  private _title: string;
  private _director: string;
  private _releaseYear: number;
  private _description: string;
  private _posterUrl: string;
  private _genre: string;

  constructor(
    id: number,
    title: string,
    director: string,
    releaseYear: number,
    description: string,
    posterUrl: string,
    genre: string
  ) {
    this._id = id;
    this._title = title;
    this._director = director;
    this._releaseYear = releaseYear;
    this._description = description;
    this._posterUrl = posterUrl;
    this._genre = genre;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get director(): string {
    return this._director;
  }

  get releaseYear(): number {
    return this._releaseYear;
  }

  get description(): string {
    return this._description;
  }

  get posterUrl(): string {
    return this._posterUrl;
  }

  get genre(): string {
    return this._genre;
  }
}
