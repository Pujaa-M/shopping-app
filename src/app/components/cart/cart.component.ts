import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { cartButtons } from 'src/app/enums/cart-buttons.enum';
import { url } from 'src/app/enums/url.enum';
import { Cart } from 'src/app/interfaces/cart.interface';
import { removeFromCart } from 'src/app/store/actions/cart.actions';
import { AppState } from 'src/app/store/app.state';
import { getTotalCost } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: Cart[] = []
  cardButtonName:string = cartButtons.REMOVE_FROM_CART;
  logoUrl: string = url.LOCAL_ASSET + 'images/logo2X.svg'
  totalCost:number = 0

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((cartData) => {
      this.cartData = cartData.cart
    })
    
    this.store.pipe(select(getTotalCost)).subscribe((totalCost) => {
      this.totalCost = totalCost
    })
  }
}
