import { Component } from '@angular/core';
import { Search } from '../search/search';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [Search],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
