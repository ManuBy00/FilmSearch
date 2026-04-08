import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesPoster',
  standalone:true
})

export class MoviesPosterPipe implements PipeTransform {
  private readonly BASE_URL = 'https://image.tmdb.org/t/p/w500';

  transform(value: string | null | undefined): string {
    if (!value){
      return 'assets/images/no-image-placeholder.png';
    }

    return `${this.BASE_URL}${value}`;
  }
}
