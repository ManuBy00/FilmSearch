import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search-service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  
  private searchService = inject(SearchService);

  handleEnter(val: string){
    this.searchService.updateQuery(val)
  }

}
