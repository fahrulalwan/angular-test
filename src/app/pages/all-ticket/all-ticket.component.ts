import { Component } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Observable } from 'rxjs';
import { Datasource, Filter } from '../../types/datasource';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent {
  private dummyData: Datasource[] = [];
  dummyData$: Observable<Datasource[]> = this.appService.getAllTicket().pipe(tap(val => this.dummyData = val));

  constructor(public appService: AppService) {
  }

  onFilterForm($event?: { filterBy: Filter, filterValue: string }) {
    this.dummyData$ = this.appService.getAllTicket($event?.filterBy, $event?.filterValue).pipe(
      startWith(this.dummyData),
      tap(val => this.dummyData = val)
    );
  }
}
