import { Component, effect, ElementRef, inject, OnInit, Query, signal, ViewChild } from '@angular/core';
import { Header } from "../../../../shared/components/header/header";
import { MovieItem } from '../../components/movie-item/movie-item';
import { Movie } from '../../models/Movie';
import { MovieApi } from '../../../../shared/services/movie-api';
import { SearchService } from '../../../../shared/services/search-service';
import { MovieSlider } from '../../components/movie-slider/movie-slider';
import { HeaderService } from '../../../../shared/services/header-service/header-service';

@Component({
  selector: 'app-movie-list',
  imports: [ MovieItem, MovieSlider],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  private searchService = inject(SearchService)
  private movieService = inject(MovieApi)
  private headerService = inject(HeaderService)
  //listas de peliculas
  searchMovies = signal<Movie[]>([])
  popularMovies = signal<Movie[]>([]);
  topRatedMovies = signal<Movie[]>([]);
  actionMovies = signal<Movie[]>([]);
  dramaMovies = signal<Movie[]>([]);
  comedyMovies = signal<Movie[]>([]);
  romanceMovies = signal<Movie[]>([]);

  //contador para paginación
  pagCounter = 1;
  isSearching = signal<boolean>(false);
  isAtStart = signal(true);
  
  
  constructor(){
    //track del input del buscador
    effect(() => {
      const query = this.searchService.text();
      this.resetPagination();

      if(query.length > 0){
        this.isSearching.set(true);
        this.searchMovie(query);
      }else{
        this.isSearching.set(false);
        this.loadMovies();
      }
    })
    this.headerService.headerTittle.set("Explora nuestro catálogo de películas")
    this.headerService.headerSubtittle.set("¡Descubre tu nueva película favorita!")
  }

  loadMovies(){
    this.loadPopularMovies()
    this.loadTopRatedMovies()
    this.loadActionMovies();
    this.loadDramaMovies();
    this.loadComedyMovies();
  }

  /**
   * carga las películas más populares del momento. es la lista de inicio
   */
  loadPopularMovies() {
    this.movieService.getPopularMovies(this.pagCounter).subscribe({
      next: (response) => {
        console.log('Datos recibidos de TMDB:', response); // Log de control 2
        this.popularMovies.update(currentMovies => [...currentMovies, ...response.results]);
      },
      error: (err) => {
        console.error('Error pillando pelis:', err);
      }
    });
  }

  loadTopRatedMovies(){
    this.movieService.getTopRatedMovies(this.pagCounter).subscribe({
      next: (response) => {
        console.log("datos de ratedMovies recibidos");
        this.topRatedMovies.update(currentMovies => [...currentMovies, ...response.results])
      }
    })
  }

  loadActionMovies(){
    this.movieService.getMoviesByGenre(28, this.pagCounter).subscribe({
      next: (response) => {
        console.log("datos de ratedMovies recibidos");
        this.actionMovies.update(currentMovies => [...currentMovies, ...response.results])
      }
    })
  }

   loadDramaMovies(){
    this.movieService.getMoviesByGenre(18, this.pagCounter).subscribe({
      next: (response) => {
        console.log("datos de ratedMovies recibidos");
        this.dramaMovies.update(currentMovies => [...currentMovies, ...response.results])
      }
    })
  }

  loadComedyMovies(){
    this.movieService.getMoviesByGenre(35, this.pagCounter).subscribe({
      next: (response) => {
        console.log("datos de ratedMovies recibidos");
        this.comedyMovies.update(currentMovies => [...currentMovies, ...response.results])
      }
    })
  }
 
  /**
   * busca películas por título
   * @param query 
   */
  searchMovie(query: string){
    this.movieService.searchMovies(query, this.pagCounter).subscribe({
      next: (response) => {
         if(this.pagCounter==2){
            this.searchMovies.set(response.results)
        }else{
            this.searchMovies.update(currentMovies => [...currentMovies, ...response.results])
        }
      }
       
    });
    
  }

  handleLoadMore(){
    if(this.isSearching()){
      this.searchMovie(this.searchService.text());
      this.pagCounter++
    }else{
      this.loadMovies()
    }
  }

   // Función única para resetear el estado antes de una nueva búsqueda
  private resetPagination() {
    this.pagCounter = 1;
    this.searchMovies.set([]); // Limpia la búsqueda anterior
    
  }


  fromChild(event:string){
    console.log('desde el padre:');
    console.log(event);
  }

  scroll(direction: 'left' | 'right', container: HTMLElement) {
    const scrollAmount = 600; // Cuánto desplazar (aprox 2-3 pelis)

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth' // Imprescindible para que no pegue saltos
    });
  }

  updateArrows(container: HTMLElement) {
    // Detectamos si el scroll está en la posición 0
    this.isAtStart.set(container.scrollLeft <= 0);
  }
}



