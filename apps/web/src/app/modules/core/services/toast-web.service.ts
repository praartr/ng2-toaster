import { Injectable } from '@angular/core';

// libs
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastService, ToastType } from '@mycompany/core';

@Injectable()
export class ToastWebService extends ToastService {

  constructor(
    private _toastr: ToastsManager
  ) {
    super();
  }

  public show(message: string, title?: string, type?: ToastType, options?: any) {
    switch (type) {
      case 'success':
        this._toastr.success(message, title, options);
        break;
      case 'error':
        this._toastr.error(message, title, options);
        break;
      case 'warning':
        this._toastr.warning(message, title, options);
        break;
      case 'info':
        this._toastr.info(message, title, options);
        break;
      case 'custom':
        this._toastr.custom(message, title, options);
        break;
      default: 
        this._toastr.success(message, title, options);
        break;
    }
  }
}