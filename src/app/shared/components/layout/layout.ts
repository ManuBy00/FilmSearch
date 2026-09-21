import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { HeaderService } from '../../services/header-service/header-service';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
   headerService = inject(HeaderService)
}
