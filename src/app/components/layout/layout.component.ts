import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private sidebarState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  sidebarState$: Observable<boolean> = this.sidebarState.asObservable().pipe(share());

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidebarState(): void {
    this.sidebarState.next(!this.sidebarState.value);
  }
}
