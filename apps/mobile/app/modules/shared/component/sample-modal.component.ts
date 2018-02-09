import { Component } from '@angular/core';
import { ModalService } from '@mycompany/core';
import {ModalDialogParams} from 'nativescript-angular/directives/dialogs';

@Component({
  moduleId: module.id,
  selector: 'ns-sample-modal',
  templateUrl: './sample-modal.component.html'
})
export class SampleModal {

  public title: string;
  constructor(private _modal: ModalService, private _params: ModalDialogParams) {
    this.title = this._params.context.title;
  }
  public close(value?: boolean) {
    this._modal.close({ value, params: this._params });
  }
}
