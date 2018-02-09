import { NgModule } from '@angular/core';

// libs
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { CoreModule as LibCoreModule, PlatformWindowService, PlatformModal } from '@mycompany/core';

// app
import { CORE_PROVIDERS } from './services';
import { WindowMobileService } from './services/window-mobile.service';
import { TNSModalService } from './services/tns-modal.service'
import { ITEMS_PROVIDERS } from '../items/services';

@NgModule({
  imports: [
    LibCoreModule.forRoot([
      {
        provide: PlatformWindowService,
        useClass: WindowMobileService
      },
      {
        provide: PlatformModal,
        useClass: TNSModalService
      },
    ]),
    TNSFontIconModule.forRoot({
      fa: './assets/font-awesome.min.css'
    })
  ],
  providers: [...CORE_PROVIDERS, ...ITEMS_PROVIDERS]
})
export class CoreModule {}
