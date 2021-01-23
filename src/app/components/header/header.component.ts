import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../service/app.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private accountTrayState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  accountTrayState$: Observable<boolean> = this.accountTrayState.asObservable();

  @Input()
  sidebarState = false;

  @Output()
  sidebarToggle: EventEmitter<boolean> = new EventEmitter();

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  onToggleSidebarState() {
    this.sidebarToggle.emit(!this.sidebarState);
  }

  openTray() {
    this.accountTrayState.next(true);
  }

  closeTray() {
    this.accountTrayState.next(false);
  }

  onLogout() {
    this.appService.logout();
  }
}
