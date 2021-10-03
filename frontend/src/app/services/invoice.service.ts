import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  public getAllInvoices() {
    return this.http.get('assets/data.json')
  }

  public getOneInvoice(id: any) {
    this.http.get('assets/data.json').subscribe(res => {
      let data: any = res
      for(let item of data) {
        if(item['id'] === id) 
          return item
      }
    })
  }
}
