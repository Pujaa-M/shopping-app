import { Component, OnInit } from '@angular/core';
import { url } from '../../enums/url.enum';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { addItems } from 'src/app/store/actions/items.actions';
import { Router } from '@angular/router';
import { Carousel } from '../../interfaces/carousel.interface';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cartURL:String = url.LOCAL_ASSET + "images/cart.svg";
  carouselData: Carousel[] = []
  itemsData: Item[] = []
  cartCount: number = 0;

  constructor(private dataService:DataService, private store: Store<{itemsAdded:any[]}>, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getData('assets/json/carousel.json').subscribe((carauselData) => {
      this.carouselData = carauselData
    })

    this.dataService.getData('assets/json/item.json').subscribe((itemData) => {
      this.store.dispatch(addItems({items:itemData}))
    })
  }

  getItemsList = (category:string) => {
    this.store.select('itemsAdded').subscribe((itemsData:any) => {
      this.itemsData = itemsData['items'][category]
      this.dataService.setItemData(this.itemsData)
    });

    this.router.navigate(['items']);
  }
}
