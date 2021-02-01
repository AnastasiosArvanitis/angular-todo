export class Film {
  Id: string;
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Response: boolean;
  Ratings: [
    {Source: string},
    {Value: string}
  ];
}
