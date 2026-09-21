export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number,
    release_date: string,
    genre_ids: number[];
    runtime: number;
}

export interface TmdbResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  release_date: string;
  genre_ids: number[];
}