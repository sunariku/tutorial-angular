import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Tambahkan ini
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Sse {
  constructor(
    private zone: NgZone,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  connect(url: string): Observable<{ total: number }> {
    if (isPlatformBrowser(this.platformId)) {
      return new Observable((observer) => {
        const eventSource = new EventSource(url, { withCredentials: true });

        eventSource.onmessage = (event) => {
          this.zone.run(() => {
            try {
              const jsonData = JSON.parse(event.data);

              observer.next(jsonData);
            } catch (e) {
              observer.next(event.data);
            }
          });
        };

        eventSource.onerror = (error) => {
          this.zone.run(() => observer.error(error));
          eventSource.close();
        };

        return () => eventSource.close();
      });
    }

    return of({ total: 0 });
  }

  sendNotification(title: string, message: string): Observable<any> {
    const body = { title, message };

    return this.http.post('http://localhost:3000/sse', body);
  }
}
