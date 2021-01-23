import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Datasource, Filter } from '../types/datasource';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  // TODO: revert isLogin to false
  isLogin = true;

  constructor(private http: HttpClient, private router: Router) {
  }

  login() {
    this.isLogin = true;
    void this.router.navigate(['/']);
  }

  logout() {
    this.isLogin = false;
    void this.router.navigate(['/login']);
  }

  getAllTicket(filterBy?: Filter, filterValue?: string): Observable<Datasource[]> {
    return this.http
      .get<Datasource[]>('/assets/json/datasource.json')
      .pipe(
        map((tickets) =>
          filterBy
            ? tickets.filter(
            (ticket) => {
              console.log(ticket[filterBy].toLowerCase(), filterValue.toLowerCase());
              return ticket[filterBy].toLowerCase().includes(filterValue.toLowerCase());
            }
            )
            : tickets
        )
      );
  }
}
