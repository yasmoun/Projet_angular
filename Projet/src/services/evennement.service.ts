import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Evennement } from 'src/models/evennement';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EvennementService {
  private eventsAddedSubject = new Subject<void>();

  constructor(private http :HttpClient ){ }
  apiURL = "http://localhost:3000/evennement";

  getEvennements():Observable<Evennement[]>{
        return this.http.get<Evennement[]> (this.apiURL);
  }

  getEvennementById(id: number): Observable<Evennement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Evennement>(url);
  }

  addEvennement(evennement: Evennement): Observable<Evennement> {
    return this.http.post<Evennement>(this.apiURL, evennement)
      .pipe(tap(() => this.eventsAddedSubject.next()));
  }
  getEventsAddedObservable(): Observable<void> {
    return this.eventsAddedSubject.asObservable();
  }

  updateEvennement(evennement: Evennement): Observable<Evennement> {
    const url = `${this.apiURL}/${evennement.id}`;
    return this.http.put<Evennement>(url, evennement);
  }

  deleteEvennement(id: number): Observable<void> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<void>(url);
  }
}
