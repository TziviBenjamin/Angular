import { Component, EventEmitter, Input, Output } from '@angular/core';
import { item } from '../../models/item';
import { Logger } from '../../services/logger';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
@Input() itemDetails: item | undefined;
@Input() storeItem: boolean = false;
@Output() deleteItemEvent = new EventEmitter<item>
@Output() addItemEvent = new EventEmitter<item>

constructor(public logger: Logger){}

  ngOnInit(): void {
    this.logger.logMsg("app ngOnInit")
  }

 copyItem1(item: any){
    this.logger.logMsg("item copied" + item.name)
  }

deleteItem1(item: any){
    this.logger.logMsg("item deleted" + item.name)
  }
 addItem1(item: any){
    this.logger.logMsg("item added to bag" + item.name)
  }

deleteItem(){
  this.deleteItemEvent.emit(this.itemDetails);
}
addItem(){
  this.addItemEvent.emit(this.itemDetails);
}
copyItem(){
  this.addItemEvent.emit(this.itemDetails);
}

}
