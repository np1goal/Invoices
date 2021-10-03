import { Component, OnInit } from '@angular/core';
import { LightService } from 'src/app/services/light.service';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {

  constructor(private lightService: LightService, private invoiceService: InvoiceService) { }

  displayInvoice: any = []
  displayFormBoolean = false;
  mode: any = 'day'

  ngOnInit(): void {
    this.invoiceService.getAllInvoices().subscribe((res) => this.displayInvoice = res)
    this.lightService.watchStorage().subscribe((data) => { this.mode = this.lightService.getItem('mode'); this.changeLight()})
  }

  changeLight() {
    if(this.mode === 'day') {
      (<HTMLElement>document.getElementById('main')).style.backgroundColor = '#F8F8FB';
      // (<HTMLElement>document.getElementById('invoice-page')).style.color = 'black';
      // (<HTMLElement>document.getElementById('go-back-button')).style.color = 'black';
      // (<HTMLElement>document.getElementById('invoice-activity')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('invoices-title')).style.color = 'black';
      (<HTMLElement>document.getElementById('invoices-length')).style.color = 'black';
      (<HTMLElement>document.getElementById('filter-invoice')).style.color = 'black';
      Array.prototype.map.call(document.getElementsByClassName('web-invoice-item'), (item: any) => item.style.backgroundColor = '#fff');
      Array.prototype.map.call(document.getElementsByClassName('mobile-invoice-item'), (item: any) => item.style.backgroundColor = '#fff');
      Array.prototype.map.call(document.getElementsByClassName('web-invoice-item'), (item: any) => item.style.color = '#000');
      Array.prototype.map.call(document.getElementsByClassName('mobile-invoice-item'), (item: any) => item.style.color = '#000');
      // (<HTMLElement>document.getElementById('invoice-information')).style.backgroundColor = '#fff';
      // (<HTMLElement>document.getElementById('invoice-items')).style.backgroundColor = '#fff';
      // (<HTMLElement>document.getElementById('total-amount-due')).style.backgroundColor = '#373B53';
    } else if (this.mode === 'night') {
      (<HTMLElement>document.getElementById('main')).style.backgroundColor = '#141625';
      // (<HTMLElement>document.getElementById('invoice-page')).style.color = 'white';
      // (<HTMLElement>document.getElementById('go-back-button')).style.color = 'white';
      // (<HTMLElement>document.getElementById('invoice-activity')).style.backgroundColor = '#1E2139';
      (<HTMLElement>document.getElementById('invoices-title')).style.color = 'white';
      (<HTMLElement>document.getElementById('invoices-length')).style.color = 'white';
      (<HTMLElement>document.getElementById('filter-invoice')).style.color = 'white';
      Array.prototype.map.call(document.getElementsByClassName('web-invoice-item'), (item: any) => item.style.backgroundColor = '#1E2139');
      Array.prototype.map.call(document.getElementsByClassName('mobile-invoice-item'), (item: any) => item.style.backgroundColor = '#1E2139');
      Array.prototype.map.call(document.getElementsByClassName('web-invoice-item'), (item: any) => item.style.color = '#fff');
      Array.prototype.map.call(document.getElementsByClassName('mobile-invoice-item'), (item: any) => item.style.color = '#fff');
      // (<HTMLElement>document.getElementById('invoice-information')).style.backgroundColor = '#1E2139';
      // (<HTMLElement>document.getElementById('invoice-items')).style.backgroundColor = '#252945';
      // (<HTMLElement>document.getElementById('total-amount-due')).style.backgroundColor = '#0C0E16';
    }
  }

  displayForm() {
    if(this.displayFormBoolean === false) {
      (<HTMLElement>document.getElementById('form')).style.display = 'block';
      this.displayFormBoolean = true
    } else {
      (<HTMLElement>document.getElementById('form')).style.display = 'none';
      this.displayFormBoolean = false
    }
  }
}
