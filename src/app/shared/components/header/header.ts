import { Component, input } from '@angular/core';
import { Search } from '../search/search';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [Search],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = input.required<string>();
  subtittle = input.required<string>();
}
