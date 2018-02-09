import { Injectable } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'custom';

@Injectable()
export class ToastService {

  public show(message: string, title?: string, type?: ToastType, options?: any) {
    // to be implemented per platform
  }
}
