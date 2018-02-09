Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PlatformModal = class PlatformModal {
    open(opts, modalOpts) { }
};
PlatformModal = __decorate([
    core_1.Injectable()
], PlatformModal);
exports.PlatformModal = PlatformModal;
let ModalService = class ModalService {
    constructor(_modal) {
        this._modal = _modal;
    }
    open(opts) {
        this._modalRef = this._modal.open(opts.cmpType, opts.modalOptions);
        if (this._modalRef) {
            if (this._modalRef.afterClosed) {
                // likely @angular/material (web)
                this._modalRef.afterClosed().subscribe((result) => {
                    console.log('Modal closed with:', result);
                }, (reason) => {
                    console.log('Modal closed reason:', reason);
                });
            }
            else if (this._modalRef.then) {
                // like {N} (mobile)
                this._modalRef.then(result => {
                    console.log('Native modal closed with:', result);
                });
            }
        }
    }
    close(result) {
        if (this._modalRef) {
            if (this._modalRef.close) {
                this._modalRef.close(result.value);
            }
            else if (this._modalRef.then) {
                result.params.closeCallback(result.value);
            }
        }
    }
};
ModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [PlatformModal])
], ModalService);
exports.ModalService = ModalService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUEyQztBQUczQyxJQUFhLGFBQWEsR0FBMUI7SUFDUyxJQUFJLENBQUMsSUFBUyxFQUFFLFNBQWMsSUFBSSxDQUFDO0NBQzNDLENBQUE7QUFGWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7R0FDQSxhQUFhLENBRXpCO0FBRlksc0NBQWE7QUFLMUIsSUFBYSxZQUFZLEdBQXpCO0lBSUUsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUV6QyxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxFQUFFLENBQUMsTUFBVyxFQUFFLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUVELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLG9CQUFvQjtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQXFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXZDWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBS2lCLGFBQWE7R0FKOUIsWUFBWSxDQXVDeEI7QUF2Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybU1vZGFsIHtcclxuICBwdWJsaWMgb3BlbihvcHRzOiBhbnksIG1vZGFsT3B0czogYW55KSB7IH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfbW9kYWxSZWY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbW9kYWw6IFBsYXRmb3JtTW9kYWwpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbihvcHRzOiBhbnkpIHtcclxuICAgIHRoaXMuX21vZGFsUmVmID0gdGhpcy5fbW9kYWwub3BlbihvcHRzLmNtcFR5cGUsIG9wdHMubW9kYWxPcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGhpcy5fbW9kYWxSZWYpIHtcclxuICAgICAgaWYgKHRoaXMuX21vZGFsUmVmLmFmdGVyQ2xvc2VkKSB7XHJcbiAgICAgICAgLy8gbGlrZWx5IEBhbmd1bGFyL21hdGVyaWFsICh3ZWIpXHJcbiAgICAgICAgdGhpcy5fbW9kYWxSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgY2xvc2VkIHdpdGg6JywgcmVzdWx0KTtcclxuICAgICAgICB9LCAocmVhc29uOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBjbG9zZWQgcmVhc29uOicsIHJlYXNvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9OYXRpdmVTY3JpcHQgUHJvbWlzZSByZXR1cm5cclxuICAgICAgZWxzZSBpZiAodGhpcy5fbW9kYWxSZWYudGhlbikge1xyXG4gICAgICAgIC8vIGxpa2Uge059IChtb2JpbGUpXHJcbiAgICAgICAgdGhpcy5fbW9kYWxSZWYudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ05hdGl2ZSBtb2RhbCBjbG9zZWQgd2l0aDonLCByZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UocmVzdWx0OiB7IHZhbHVlPzogYW55OyBwYXJhbXM/OiBhbnkgfSkge1xyXG4gICAgaWYgKHRoaXMuX21vZGFsUmVmKSB7XHJcbiAgICAgIGlmICh0aGlzLl9tb2RhbFJlZi5jbG9zZSkge1xyXG4gICAgICAgIHRoaXMuX21vZGFsUmVmLmNsb3NlKHJlc3VsdC52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbW9kYWxSZWYudGhlbikge1xyXG4gICAgICAgIHJlc3VsdC5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==