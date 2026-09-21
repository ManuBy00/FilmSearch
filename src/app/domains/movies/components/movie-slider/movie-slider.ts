import { Component, input, signal } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieItem } from '../movie-item/movie-item';

@Component({
  selector: 'app-movie-slider',
  imports: [MovieItem],
  templateUrl: './movie-slider.html',
  styleUrl: './movie-slider.css',
})
export class MovieSlider {
  title = input.required<string>();
  movies = input.required<Movie[]>();

  isAtStart = signal(true);

  scroll(direction: 'left' | 'right', container: HTMLElement) {
    const scrollAmount = 600;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  updateArrows(container: HTMLElement) {
    this.isAtStart.set(container.scrollLeft <= 0);
  }
}
