import { Component, OnInit } from '@angular/core';
import { item } from '../../models/item';
import { Item } from '../item/item';
import { Bag } from '../bag/bag';

@Component({
  selector: 'app-store',
  imports: [Item, Bag],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store implements OnInit{

  items:item[] = [];
  addedItem:item[] = [];

  ngOnInit(): void {
    var item1 = new item();
    item1.name = "item1";
    item1.description = "item1 desc";
    item1.price = 1;
    item1.qty = 45;

    this.items.push(item1);

    var item2 = new item();
    item2.name = "item2";
    item2.description = "item2 desc";
    item2.price = 1;
    item2.qty = 45;

    this.items.push(item2);

    var item3 = new item();
    item3.name = "item3";
    item3.description = "item3 desc";
    item3.price = 1;
    item3.qty = 45;

    this.items.push(item3);

    var item4 = new item();
    item4.name = "item4";
    item4.description = "item4 desc";
    item4.price = 1;
    item4.qty = 45;

    this.items.push(item4);

    var item5 = new item();
    item5.name = "item5";
    item5.description = "item5 desc";
    item5.price = 1;
    item5.qty = 45;

    this.items.push(item5);

  }

  deleteItemParent(itemToDelete: item){
    this.items = this.items.filter(x => x!= itemToDelete);
  }

  addItemParent(itemToadd: item){
    this.addedItem.push(itemToadd);
  }
}
