import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  accountOptionState = false;

  @Input()
  sidebarState = false;

  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter();

  constructor(private appService: AppService) {}

  ngOnInit() {}

  onToggleSidebarState() {
    this.toggle.emit(!this.sidebarState);
  }

  onToggleAccountOptionState() {
    this.accountOptionState = !this.accountOptionState;
  }

  onLogout() {
    this.appService.logout();
  }
}
