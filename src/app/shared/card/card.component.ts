import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/interfaces/item.interface';
import { addToCart, removeFromCart } from 'src/app/store/actions/cart.actions';
import { AppState } from 'src/app/store/app.state';
import { cartButtons } from 'src/app/enums/cart-buttons.enum';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { PopUpService } from 'src/app/services/pop-up.service';
import { Cart } from 'src/app/interfaces/cart.interface';
import { v4 as uuidv4 } from 'uuid';
import { url } from 'src/app/enums/url.enum';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('popupContainer', {read: ViewContainerRef}) popupContainer!: ViewContainerRef

  @Input() itemData:Item = {
    title: '',
    cost: '',
    img: ''
  }

  @Input() cartData:Cart = {
    id: '',
    title: '',
    cost: '',
    img: '',
    quantity: 0
  }

  @Input() buttonName:string = ''
  cartButtonNames: any = cartButtons
  imgUrl:string = ''
  backgroundImage: any = {}

  constructor(private popService: PopUpService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.imgUrl = this.cartData.id ? url.LOCAL_ASSET + this.cartData.img : url.LOCAL_ASSET + this.itemData.img
    this.backgroundImage = {
      "background-image": `url(${this.imgUrl})` 
    }
  }

  addToCart = (item: Item) => {
    let cartId = uuidv4()
    let cartItem:Cart = {
      id: cartId,
      title: item.title,
      cost: item.cost,
      img: item.img,
      quantity: 1
    }
    this.popService.open(this.popupContainer, cartItem)
  }

  removeFromCart = (cartId:string) => {
    this.store.dispatch(removeFromCart({cartId}))
  }
}
