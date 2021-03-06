import { Injectable } from '@angular/core';

@Injectable()
export class PlatformWindowService {
  public alert(msg: any) { };
  public confirm(msg: any) { };
}

@Injectable()
export class WindowService {

  private _dialogOpened = false;

  constructor(
    private _platformWindow: PlatformWindowService,
  ) { }

  public alert(msg: any): Promise<any> {
    return new Promise((resolve, reject) => {
      //iOS UI standards doesn't allow multiple dialogs to be overlapped
      if (!this._dialogOpened) {
        this._dialogOpened = true;
        this._resultHandler(this._platformWindow.alert(msg), resolve, reject, true);
      }
    });
  }

  public confirm(msg: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this._dialogOpened) {
        this._dialogOpened = true;
        this._resultHandler(this._platformWindow.confirm(msg), resolve, reject);
      }
    });
  }

  private _resultHandler(result: any, resolve: (result?: any) => void, reject: (reason?: any) => void, alwaysResolve?: boolean) {
    if (typeof result === 'object' && result.then) {
      // tslint:disable-next-line:no-shadowed-variable
      result.then((result) => {
        if (alwaysResolve || result) {
          resolve(result);
        } else {
          reject();
        }
        this._dialogOpened = false;
      }, (err) => {
        reject(err);
        this._dialogOpened = false;
      });
    } else {
      if (alwaysResolve || result) {
        resolve(result);
      } else {
        reject();
      }
      this._dialogOpened = false;
    }
  }
}
