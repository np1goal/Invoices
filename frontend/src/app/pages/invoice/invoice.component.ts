import { Component, OnInit } from '@angular/core';
import { LightService } from 'src/app/services/light.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor(private lightService: LightService) { }

  invoice  =  {
    "id": "RT3080",
    "createdAt": "2021-08-18",
    "paymentDue": "2021-08-19",
    "description": "Re-branding",
    "paymentTerms": 1,
    "clientName": "Jensen Huang",
    "clientEmail": "jensenh@mail.com",
    "status": "pending",
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "106 Kendell Street",
      "city": "Sharrington",
      "postCode": "NR24 5WQ",
      "country": "United Kingdom"
    },
    "items": [
      {
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 1800.90,
        "total": 1800.90
      }
    ],
    "total": 1800.90
  }

  mode: any = 'day'

  ngOnInit(): void {
    this.lightService.watchStorage().subscribe((data) => { this.mode = this.lightService.getItem('mode'); this.changeLight()})
  }

  changeLight() {
    if(this.mode === 'day') {
      (<HTMLElement>document.getElementById('main')).style.backgroundColor = '#F8F8FB';
      (<HTMLElement>document.getElementById('invoice-page')).style.color = 'black';
      (<HTMLElement>document.getElementById('go-back-button-web')).style.color = 'black';
      (<HTMLElement>document.getElementById('go-back-button-mobile')).style.color = 'black';
      (<HTMLElement>document.getElementById('invoice-activity-web')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('invoice-activity-mobile')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('invoice-id-web')).style.color = 'black';
      (<HTMLElement>document.getElementById('invoice-id-mobile')).style.color = 'black';
      (<HTMLElement>document.getElementById('invoice-information-web')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('invoice-information-mobile')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('invoice-items-web')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('invoice-items-mobile')).style.backgroundColor = '#fff';
      (<HTMLElement>document.getElementById('total-amount-due-web')).style.backgroundColor = '#373B53';
      (<HTMLElement>document.getElementById('total-amount-due-mobile')).style.backgroundColor = '#373B53';
      (<HTMLElement>document.getElementById('invoice-action-buttons')).style.backgroundColor = '#fff';
    } else if (this.mode === 'night') {
      (<HTMLElement>document.getElementById('main')).style.backgroundColor = '#141625';
      (<HTMLElement>document.getElementById('invoice-page')).style.color = 'white';
      (<HTMLElement>document.getElementById('go-back-button-web')).style.color = 'white';
      (<HTMLElement>document.getElementById('go-back-button-mobile')).style.color = 'white';
      (<HTMLElement>document.getElementById('invoice-activity-web')).style.backgroundColor = '#1E2139';
      (<HTMLElement>document.getElementById('invoice-activity-mobile')).style.backgroundColor = '#1E2139';
      (<HTMLElement>document.getElementById('invoice-id-web')).style.color = 'white';
      (<HTMLElement>document.getElementById('invoice-id-mobile')).style.color = 'white';
      (<HTMLElement>document.getElementById('invoice-information-web')).style.backgroundColor = '#1E2139';
      (<HTMLElement>document.getElementById('invoice-information-mobile')).style.backgroundColor = '#1E2139';
      (<HTMLElement>document.getElementById('invoice-items-web')).style.backgroundColor = '#252945';
      (<HTMLElement>document.getElementById('invoice-items-mobile')).style.backgroundColor = '#252945';
      (<HTMLElement>document.getElementById('total-amount-due-web')).style.backgroundColor = '#0C0E16';
      (<HTMLElement>document.getElementById('total-amount-due-mobile')).style.backgroundColor = '#0C0E16';
      (<HTMLElement>document.getElementById('invoice-action-buttons')).style.backgroundColor = '#1E2139';
    }
  }
}
