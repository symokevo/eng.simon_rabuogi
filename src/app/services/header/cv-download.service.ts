import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvDownloadService {
  cvName: string | undefined;

  constructor(
    private http: HttpClient
  ) { }

  get(key: string): Observable<any> {
    // Simulate an http call to get the cv name
    return this.http.get<any>(`/api/config/${key}`).pipe(
      catchError(err => {
        console.error('Error fetching CV name:', err);
        return of(null);
      })
    )
  }

  downloadCV() {
    this.get("Header.cvName").subscribe(val => {
      if (val) {
        this.cvName = val;
        console.log(val);
        // Construct the URL using a safer method
        const baseUrl = window.location.origin;
        const cvUrl = `${baseUrl}/assets/cv/${this.cvName}`;

        // Open a new window with the CV
        window.open(cvUrl, "_blank");
      } else {
        console.error("CV name not found.");
      }
    });
  }
}
