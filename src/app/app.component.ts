import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { url } from './enums/url.enum';
import { Store } from '@ngrx/store';
import { Item } from './interfaces/item.interface';
import { AppState } from './store/app.state';
import { Router } from '@angular/router';
import { PopUpService } from './services/pop-up.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('popupContainer', ({ read: ViewContainerRef })) popupContainer!: ViewContainerRef;
  title = "demo project"
  cartURL:string = url.LOCAL_ASSET + 'images/cart.svg'
  cartCount: number = 0

  constructor(private store:Store<AppState>, private router:Router, private popService: PopUpService) {}

  ngAfterViewInit(): void {
  }

  ngOnInit():void {
    this.router.navigate(['/home']);
    this.store.select('cart').subscribe(cartData => {
      this.cartCount = cartData.cart.length
    })
  }

  routeToCart = () => {
    this.router.navigate(['/cart'])
  }
}
