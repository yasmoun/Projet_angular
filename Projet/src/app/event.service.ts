// event.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: any[] = [];
  private eventsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getEvents(): Observable<any[]> {
    return this.eventsSubject.asObservable();
  }

  addEvent(event: any): void {
    this.events.push(event);
    this.eventsSubject.next(this.events);
  }
}
