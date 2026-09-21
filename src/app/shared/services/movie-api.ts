import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie, TmdbResponse } from '../../domains/movies/models/Movie';
import { GenreResponse } from '../../domains/movies/models/Genre';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {

  private http = inject(HttpClient);
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly apiKey = '9611f552a8013fb7fc08b5f4c91d31c4'; //ESTO LO DEBERÍA PONER EN OTRO ARCHIVO POR SEGURIDAD

  private genreMap = signal<Map<number, string>>(new Map());
  
  /**
   * obtiene las películas más populares
   * @param page 
   * @returns 
   */
  getPopularMovies(page = 1): Observable<TmdbResponse> {
    return this.http.get<TmdbResponse>(`${this.baseUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
        page: page.toString()
      }
    });
  }

  /**
   * obtiene una lista de películas  a partir del título introducido
   * @param query título de la película
   * @param page 
   * @returns 
   */
  searchMovies(query: string, page = 1): Observable<TmdbResponse> {
    return this.http.get<TmdbResponse>(`${this.baseUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: query,
        language: 'es-ES',
        page: page.toString()
      }
    });
  }


  getGenres(): Observable<GenreResponse> {
    // TMDB necesita el lenguaje para devolver los nombres en español
    return this.http.get<GenreResponse>(`${this.baseUrl}/genre/movie/list`, {
      params: {
        api_key: this.apiKey,
        language: 'es-ES'
      }
    });
  }

  getMovieById(id:string): Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey,
        language: 'es-ES'
      }
    }) 
  }


  /**
   * obtiene las películas más populares
   * @param page 
   * @returns 
   */
  getTopRatedMovies(page = 1): Observable<TmdbResponse> {
    return this.http.get<TmdbResponse>(`${this.baseUrl}/movie/top_rated`, {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
        page: page.toString()
      }
    });
  }

  /**
 * Obtiene películas por género (Acción por defecto)
 * @param genreId ID del género (28 para acción, 18 para drama, etc.)
 * @param page número de página
 */
getMoviesByGenre(genreId: number, page: number = 1): Observable<TmdbResponse> {
  return this.http.get<TmdbResponse>(`${this.baseUrl}/discover/movie`, {
    params: {
      api_key: this.apiKey,
      language: 'es-ES',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page: page.toString(),
      with_genres: genreId.toString() // Aquí pasamos el ID del género
      }
    });
  }
}
