import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Datasource, Filter } from '../types/datasource';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  isLogin = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  checkLogin(): boolean {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) {
      this.isLogin = JSON.parse(isLogin);
    }
    return this.isLogin;
  }

  login(): void {
    this.isLogin = true;
    localStorage.setItem('isLogin', 'true');
    void this.router.navigate(['/']);
  }

  logout(): void {
    this.isLogin = false;
    localStorage.setItem('isLogin', 'false');
    void this.router.navigate(['/login']);
  }

  getAllTicket(filterBy?: Filter, filterValue?: string): Observable<Datasource[]> {
    return this.http.get<Datasource[]>('/assets/json/datasource.json')
      .pipe(
        map((tickets) =>
          filterBy
            ? tickets.filter(ticket => ticket[filterBy].toLowerCase().includes(filterValue.toLowerCase()))
            : tickets
        )
      );
  }
}
