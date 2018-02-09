import { AppService } from './app.service';
import { WindowMobileService } from './window-mobile.service';
import { TNSModalService } from './tns-modal.service';

export const CORE_PROVIDERS = [AppService, WindowMobileService, TNSModalService];
