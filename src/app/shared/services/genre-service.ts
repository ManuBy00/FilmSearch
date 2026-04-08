import { inject, Injectable, signal } from '@angular/core';
import { MovieApi } from './movie-api';

@Injectable({
  providedIn: 'root',
})
export class GenreService {

  private movieApi = inject(MovieApi);
  
  
  private genreMap = signal<Map<number, string>>(new Map());

  constructor() {
    this.init();
  }

  private init() {
    this.movieApi.getGenres().subscribe({
      next: (response) => {
        const tempMap = new Map<number, string>();
        response.genres.forEach(g => tempMap.set(g.id, g.name));
        this.genreMap.set(tempMap);
      }
    });
  }


  getGenreName(id: number): string {
    return this.genreMap().get(id) || 'Cargando...';
  }

}
