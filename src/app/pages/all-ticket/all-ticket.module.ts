import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllTicketComponent } from './all-ticket.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AllTicketComponent
  }
];

@NgModule({
  declarations: [AllTicketComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule]
})
export class AllTicketModule {
}
