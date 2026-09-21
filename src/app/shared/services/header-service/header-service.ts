import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  headerTittle = signal<string>("")
  headerSubtittle = signal<string>("")

  /**
   * cambia los inputs del header
   * @param tittle 
   * @param subtittle 
   */
  setHeaderInputs(tittle: string, subtittle: string){
    this.headerTittle.set(tittle)
    this.headerSubtittle.set(subtittle)
  }
}
