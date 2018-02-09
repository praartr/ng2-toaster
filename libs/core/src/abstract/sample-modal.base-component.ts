import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

export abstract class SampleModalBase {
  constructor(public _modal: ModalService){

  }
  public close(value?: any) {
    // let result: any = {
    //   value
    // };
    // if(value && value.params) {
    //     result.params = value.params;
    // }
    this._modal.close({ value });
  }
}
