import { Component, HostListener, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { url } from 'src/app/enums/url.enum';
import { Cart } from 'src/app/interfaces/cart.interface';
import { PopUpService } from 'src/app/services/pop-up.service';
import { addToCart } from 'src/app/store/actions/cart.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  @Input() itemData: Cart = {
    id: '',
    title: '',
    cost: '',
    img: '',
    quantity: 0
  }

  @Input() container!: ViewContainerRef

  imgUrl:string = ''
  backgroundImage:any = {}

  constructor(private store:Store<AppState>, private popupService: PopUpService) { }

  ngOnInit(): void {
    this.imgUrl = url.LOCAL_ASSET + this.itemData.img
    this.backgroundImage = {
      'background-image': `url(${this.imgUrl})`
    }
  }

  increaseQuantity = () => {
    if(this.itemData.quantity < 10)
      this.itemData.quantity ++
    else
      this.itemData.quantity = 10
  }

  decreaseQuantity = () => {
    if(this.itemData.quantity > 1)
      this.itemData.quantity --
    else
      this.itemData.quantity = 1
  }

  addToCart = () => {
    let cost = this.itemData.quantity * (+this.itemData.cost)
    this.itemData.cost = `${cost}`
    let item = this.itemData
    this.store.dispatch(addToCart({item}))
    this.closePopup()
  }

  closePopup = () => {
    this.popupService.close(this.container)
  }
}
