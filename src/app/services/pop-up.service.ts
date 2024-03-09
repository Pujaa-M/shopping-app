import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { PopUpComponent } from '../shared/pop-up/pop-up.component';
import { Cart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  open = (container: ViewContainerRef, item: Cart) => {
    container.clear()
    const component = this.componentFactoryResolver.resolveComponentFactory(PopUpComponent)
    const createdComponent = container.createComponent(component)
    const componentInstance = createdComponent.instance
    componentInstance.itemData = item
    componentInstance.container = container
  }

  close = (container: ViewContainerRef) => {
    container.clear()
  }
}
