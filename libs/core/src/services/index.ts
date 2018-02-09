import { ModalService } from './modal.service';
import { WindowService } from './window.service';
import { ToastService } from './toast.service';

export const PROVIDERS = [
    ModalService,
    WindowService,
    ToastService
];

export * from './modal.service';
export * from './window.service';
export * from './toast.service';
