import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _query = signal<string>('');

  text = this._query.asReadonly();

  updateQuery(val: string) {
    this._query.set(val);
  }

  
}
