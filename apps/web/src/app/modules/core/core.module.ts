import { NgModule, Optional, SkipSelf } from '@angular/core';
// libs
import { MatDialog } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CoreModule as LibCoreModule, PlatformWindowService, throwIfAlreadyLoaded, PlatformModal, ToastService } from '@mycompany/core';

// app
import { ToastWebService } from './services/toast-web.service';


// factories
export function platformWindow() {
  return window;
}

export function toastFactory(toastManager) {
 return new ToastWebService(toastManager);
}

@NgModule({
  imports: [
    LibCoreModule.forRoot([
      {
        provide: PlatformWindowService,
        useFactory: platformWindow
      },
      {
        provide: PlatformModal,
        useClass: MatDialog
      },
      {
        provide: ToastService,
        useFactory: toastFactory,
        deps: [ToastsManager]
      }
    ])
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
