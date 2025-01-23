import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IconService {
  private categories: string[] = ['arrows', 'users']; // Array of valid categories

  constructor(private http: HttpClient) {}

  // Method to get the SVG of an icon
  getIcon(iconName: string): Observable<string> {
    return new Observable<string>((subscriber) => {
      let found = false;
      let index = 0;

      const checkNextCategory = () => {
        if (index < this.categories.length && !found) {
          const cat = this.categories[index];
          const url = `assets/icons/${cat}.json`;
          console.log('url', url);

          this.http.get<{ [key: string]: string }>(url).pipe(
            map(icons => icons[iconName])
          ).subscribe(svg => {
            if (svg) {
              found = true;
              subscriber.next(svg);
              subscriber.complete();
            } else {
              index++;
              checkNextCategory();
            }
          });
        } else {
          subscriber.complete(); // If not found in any category
        }
      };

      checkNextCategory();
    });
  }
}
