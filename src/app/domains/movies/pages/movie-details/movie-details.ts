import { Component, inject, input, signal } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieApi } from '../../../../shared/services/movie-api';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesPosterPipe } from '../../Pipes/movies-poster-pipe';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HeaderService } from '../../../../shared/services/header-service/header-service';


@Component({
  selector: 'app-movie-details',
  imports: [DatePipe, DecimalPipe, MoviesPosterPipe, RouterLink],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  movieService = inject(MovieApi);
  headerService = inject(HeaderService)

  movie = signal<Movie| null>(null);
  genreService: any;
  
  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      const id = params['id']
      if(id){
        this.getMovie(id)
      }
    })

    this.headerService.headerTittle.set("");
  }

  getMovie(id:string){
    this.movieService.getMovieById(id).subscribe
    (movie => {
      this.movie.set(movie)
    })
  }
}
