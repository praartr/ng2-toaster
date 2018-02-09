Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PlatformWindowService = class PlatformWindowService {
    alert(msg) { }
    ;
    confirm(msg) { }
    ;
};
PlatformWindowService = __decorate([
    core_1.Injectable()
], PlatformWindowService);
exports.PlatformWindowService = PlatformWindowService;
let WindowService = class WindowService {
    constructor(_platformWindow) {
        this._platformWindow = _platformWindow;
        this._dialogOpened = false;
    }
    alert(msg) {
        return new Promise((resolve, reject) => {
            //iOS UI standards doesn't allow multiple dialogs to be overlapped
            if (!this._dialogOpened) {
                this._dialogOpened = true;
                this._resultHandler(this._platformWindow.alert(msg), resolve, reject, true);
            }
        });
    }
    confirm(msg) {
        return new Promise((resolve, reject) => {
            if (!this._dialogOpened) {
                this._dialogOpened = true;
                this._resultHandler(this._platformWindow.confirm(msg), resolve, reject);
            }
        });
    }
    _resultHandler(result, resolve, reject, alwaysResolve) {
        if (typeof result === 'object' && result.then) {
            // tslint:disable-next-line:no-shadowed-variable
            result.then((result) => {
                if (alwaysResolve || result) {
                    resolve(result);
                }
                else {
                    reject();
                }
                this._dialogOpened = false;
            }, (err) => {
                reject(err);
                this._dialogOpened = false;
            });
        }
        else {
            if (alwaysResolve || result) {
                resolve(result);
            }
            else {
                reject();
            }
            this._dialogOpened = false;
        }
    }
};
WindowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [PlatformWindowService])
], WindowService);
exports.WindowService = WindowService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0NBQTJDO0FBRzNDLElBQWEscUJBQXFCLEdBQWxDO0lBQ1MsS0FBSyxDQUFDLEdBQVEsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUNwQixPQUFPLENBQUMsR0FBUSxJQUFJLENBQUM7SUFBQSxDQUFDO0NBQzlCLENBQUE7QUFIWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtHQUNBLHFCQUFxQixDQUdqQztBQUhZLHNEQUFxQjtBQU1sQyxJQUFhLGFBQWEsR0FBMUI7SUFJRSxZQUNVLGVBQXNDO1FBQXRDLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQUh4QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUkxQixDQUFDO0lBRUUsS0FBSyxDQUFDLEdBQVE7UUFDbkIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLGtFQUFrRTtZQUNsRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlFLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBUTtRQUNyQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFFLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxjQUFjLENBQUMsTUFBVyxFQUFFLE9BQStCLEVBQUUsTUFBOEIsRUFBRSxhQUF1QjtRQUMxSCxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsZ0RBQWdEO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDckIsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLEVBQUUsQ0FBQztnQkFDWCxDQUFDO2dCQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzdCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWxEWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBTWdCLHFCQUFxQjtHQUxyQyxhQUFhLENBa0R6QjtBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtV2luZG93U2VydmljZSB7XHJcbiAgcHVibGljIGFsZXJ0KG1zZzogYW55KSB7IH07XHJcbiAgcHVibGljIGNvbmZpcm0obXNnOiBhbnkpIHsgfTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2luZG93U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2RpYWxvZ09wZW5lZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3BsYXRmb3JtV2luZG93OiBQbGF0Zm9ybVdpbmRvd1NlcnZpY2UsXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIGFsZXJ0KG1zZzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIC8vaU9TIFVJIHN0YW5kYXJkcyBkb2Vzbid0IGFsbG93IG11bHRpcGxlIGRpYWxvZ3MgdG8gYmUgb3ZlcmxhcHBlZFxyXG4gICAgICBpZiAoIXRoaXMuX2RpYWxvZ09wZW5lZCkge1xyXG4gICAgICAgIHRoaXMuX2RpYWxvZ09wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0SGFuZGxlcih0aGlzLl9wbGF0Zm9ybVdpbmRvdy5hbGVydChtc2cpLCByZXNvbHZlLCByZWplY3QsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maXJtKG1zZzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5fZGlhbG9nT3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fZGlhbG9nT3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZXN1bHRIYW5kbGVyKHRoaXMuX3BsYXRmb3JtV2luZG93LmNvbmZpcm0obXNnKSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXN1bHRIYW5kbGVyKHJlc3VsdDogYW55LCByZXNvbHZlOiAocmVzdWx0PzogYW55KSA9PiB2b2lkLCByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQsIGFsd2F5c1Jlc29sdmU/OiBib29sZWFuKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgcmVzdWx0LnRoZW4pIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgIHJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoYWx3YXlzUmVzb2x2ZSB8fCByZXN1bHQpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RpYWxvZ09wZW5lZCA9IGZhbHNlO1xyXG4gICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgdGhpcy5fZGlhbG9nT3BlbmVkID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGFsd2F5c1Jlc29sdmUgfHwgcmVzdWx0KSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2RpYWxvZ09wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=