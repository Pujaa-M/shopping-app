import { Component, OnInit } from '@angular/core';
import { url } from 'src/app/enums/url.enum';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  logoUrl:string = url.LOCAL_ASSET + 'images/logo.svg'
  
  constructor() { }

  ngOnInit(): void {
  }

}
