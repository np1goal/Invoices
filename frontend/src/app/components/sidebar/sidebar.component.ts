import { Component, OnInit } from '@angular/core';
import { LightService } from 'src/app/services/light.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private lightService: LightService) { }

  mode = 'moon'

  ngOnInit(): void {
    this.lightService.setItem('mode', 'day')
  }

  changeMode() {
    if(this.mode === 'moon') {
      (<HTMLElement>document.getElementById('mode-icon')).setAttribute('src', '../../../assets/icon-sun.svg')
      this.lightService.setItem('mode', 'night')
      this.mode = 'sun'
    } else if(this.mode === 'sun') {
      (<HTMLElement>document.getElementById('mode-icon')).setAttribute('src', '../../../assets/icon-moon.svg')
      this.lightService.setItem('mode', 'day')
      this.mode = 'moon'
    }
  }

}
