import { NgModule, Optional, SkipSelf } from '@angular/core';
// libs
import { CoreModule as LibCoreModule, PlatformWindowService, throwIfAlreadyLoaded, PlatformModal } from '@mycompany/core';

import {MatDialog} from '@angular/material';

// factories
export function platformWindow() {
  return window;
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
