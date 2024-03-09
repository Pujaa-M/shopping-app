import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { Item } from '../../interfaces/item.interface';
import { AppState } from 'src/app/store/app.state';
import { cartButtons } from 'src/app/enums/cart-buttons.enum';
import { addToCart } from 'src/app/store/actions/cart.actions';
import { Cart } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  itemData: Item[] | Cart[] = [];
  cardButtonName:string = cartButtons.ADD_TO_CART

  constructor(private dataService: DataService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.itemData = this.dataService.getItemData()
  }
}
