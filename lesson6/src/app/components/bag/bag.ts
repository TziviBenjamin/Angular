import { Component, Input } from '@angular/core';
import { item } from '../../models/item';
import { Item } from '../item/item';

@Component({
  selector: 'app-bag',
  imports: [Item],
  templateUrl: './bag.html',
  styleUrl: './bag.css',
})
export class Bag {
  @Input() items:item[] = [];
}
