import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IconService {
  private iconsUrl = 'assets/icons/arrows.json'; // Ruta a tu archivo JSON

  constructor(private http: HttpClient) {}

  // Método para obtener el SVG de un ícono
  getIcon(iconName: string): Observable<string> {
    return this.http.get<{ [key: string]: string }>(this.iconsUrl).pipe(
      map(icons => {
        const svg = icons[iconName];
        return svg || '';
      })
    );
  }
}
