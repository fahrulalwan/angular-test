import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyTicketComponent } from './my-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: MyTicketComponent
  }
];

@NgModule({
  declarations: [MyTicketComponent],
  imports: [RouterModule.forChild(routes), CommonModule]
})
export class MyTicketModule {
}
