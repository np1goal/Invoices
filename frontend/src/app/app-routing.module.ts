import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { InvoiceComponent } from 'src/app/pages/invoice/invoice.component';
import { InvoicesListComponent } from 'src/app/pages/invoices-list/invoices-list.component';

const routes: Routes = [
  {path: '', component: InvoicesListComponent},
  {path: 'invoice/:id', component: InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
