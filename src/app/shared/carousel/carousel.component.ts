import { Component, Input, OnInit } from '@angular/core';
import { url } from 'src/app/enums/url.enum';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carouselBackground: string = ''
  backgroundStyle:any

  constructor() { }

  ngOnInit(): void {
    this.backgroundStyle = {'background-image': `url(${url.LOCAL_ASSET + this.carouselBackground})`}
  }

}
