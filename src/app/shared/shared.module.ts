import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CardComponent
  ]
})
export class SharedModule { }
