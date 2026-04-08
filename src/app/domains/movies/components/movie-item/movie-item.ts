import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { DatePipe, DecimalPipe, NgOptimizedImage } from '@angular/common';
import { Movie } from '../../models/Movie';
import { MoviesPosterPipe } from '../../Pipes/movies-poster-pipe';
import { GenreService } from '../../../../shared/services/genre-service';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-movie-item',
  imports: [DatePipe, MoviesPosterPipe, DecimalPipe, RouterLink],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {

  @Input({required: true}) movie!: Movie;
  
  
  @Output() addToMyMovies = new EventEmitter();

  

  genreService = inject(GenreService)

  /**
   * método para añadir una película a la lista del usuario. PENDIENTE 
   */
  addToMyMoviesHandler() {
    console.log('click from child')
    this.addToMyMovies.emit('Hola, este es un msg desde el hijo')
  }




} 
