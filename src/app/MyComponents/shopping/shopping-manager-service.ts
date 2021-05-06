import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Sight } from 'src/app/sight';

@Injectable({
  providedIn: 'root',
})
export class ShoppingManagerService {
  private catalog = [
    {
      name: `Sigth 1`,
      price: `20000`,
      id: 1,
      url:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: `Sigth 2`,
      price: `40000`,
      id: 2,
      url:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    },
    {
      name: `Sigth 3`,
      price: `80000`,
      id: 3,
      url:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
  ];
  private cart = [];
  constructor() {}

  getCatalogue() {
    return this.catalog;
  }

  getCart() {
    return this.cart;
  }

  addItemToCart(val) {
    let exist = false;
    this.cart.forEach((element, index) => {
      if (element.id === val) {
        this.cart[index].count += 1;
        exist = true;
        return;
      }
    });
    if (exist) {
      return;
    }
    this.catalog.forEach((element) => {
      if (element.id === val) {
        let newItem: { [k: string]: any } = element;
        newItem.count = 1;
        this.cart.push(newItem);
        return;
      }
    });
  }

  reduceItemFromCart(val) {
    this.cart.forEach((element) => {
      if (element.id === val) {
        element.count -= 1;
        if (element.count === 0) {
          this.cart = this.cart.filter((item) => item.id !== val);
        }
        return;
      }
    });
  }
}