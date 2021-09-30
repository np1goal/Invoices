import { Component, OnInit } from '@angular/core';
import { LightService } from 'src/app/services/light.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private lightService: LightService) { }

  mode: any = 'day'

  ngOnInit(): void {
    this.lightService.watchStorage().subscribe((data) => { this.mode = this.lightService.getItem('mode'); this.changeLight()})
  }

  changeLight() {
    if(this.mode === 'day') {
      (<HTMLElement>document.getElementById('main')).style.backgroundColor = '#F8F8FB';
    } else if (this.mode === 'night') {
      (<HTMLElement>document.getElementById('main')).style.backgroundColor = '#141625';
    }
  }

}
