export class Movie {
  constructor(
    private _id: number = 0,
    private _title: string = '',
    private _director: string = '',
    private _releaseYear: number = 0,
    private _description: string = '',
    private _posterUrl: string = '',
    private _genre: string = ''
  ) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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
