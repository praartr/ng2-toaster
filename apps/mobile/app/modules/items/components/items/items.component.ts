import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WindowService, ModalService } from '@mycompany/core';
import { Item } from '../../models';
import { ItemService } from '../../services/item.service';
import { SampleModal } from '../../../shared/component/sample-modal.component';
@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: Item[];

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s CoreModule.
  // Providing it via the CoreModule ensures it's a singleton across the entire app
  constructor(private itemService: ItemService, private _win: WindowService, private _modal: ModalService, private _vcRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
  public alert(msg: string) {
    this._win.alert(msg).then(_ => {
      console.log('alert dismissed.');
    });
  }

  public confirm(msg: string) {
    this._win.confirm(msg).then(
      confirmed => {
        console.log('confirm:', confirmed);
      },
      _ => {
        console.log('confirm canceled.');
      }
    );
  }
  public openModal() {
   this._modal.open({
     cmpType: SampleModal,
     modalOptions:{
       viewContainerRef : this._vcRef,
       context: {
         title:'ngAtl!'
       }
    }
   });
  }
}
