import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { Observable } from 'rxjs';
import { Datasource, Filter } from '../../types/datasource';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent implements OnInit {
  dummyData$: Observable<Datasource[]> = this.appService.getAllTicket();

  constructor(public appService: AppService) {
  }

  ngOnInit() {
  }

  onFilterForm($event: { filterBy: Filter, filterValue: string }) {
    this.dummyData$ = this.appService.getAllTicket($event.filterBy, $event.filterValue);
  }

  resetFilter() {
    this.dummyData$ = this.appService.getAllTicket();
  }
}
