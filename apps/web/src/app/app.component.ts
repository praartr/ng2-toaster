import { Component, OnInit, ViewContainerRef} from '@angular/core';

// libs
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { WindowService, ModalService, ToastService, ToastType } from '@mycompany/core';

// app
import { SampleModal } from './sample-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _win: WindowService, private _modal: ModalService, private _toastr: ToastsManager, private _vcRef: ViewContainerRef, private _toast: ToastService) {
    this._toastr.setRootViewContainerRef(this._vcRef);
  }

  ngOnInit() {}

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
  public openModal(){
    this._modal.open({
      cmpType : SampleModal
    })
  }

  public showToast(message: string, title?: string, type?: ToastType) {
    this._toast.show(message, title, type);
  }

  public showToastWithHtml() {
    this._toast.show('<span style="color: red">Message in red.</span>', 'HTML toast!', 'custom', {enableHTML: true});
  }
}
