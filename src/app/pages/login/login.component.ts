import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.appService.login();
  }
}
