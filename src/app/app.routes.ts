import { Routes } from '@angular/router';
import { MovieList } from './domains/movies/pages/movie-list/movie-list';
import { MovieDetails } from './domains/movies/pages/movie-details/movie-details';

export const routes: Routes = [
    {
    path: "",
    component: MovieList
    },

    {
    path:"movie/:id",
    component: MovieDetails
    }
    
];
