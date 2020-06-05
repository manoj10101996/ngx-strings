import { __decorate } from "tslib";
import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
var StringcutDirective = /** @class */ (function () {
    function StringcutDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    StringcutDirective.prototype.ngOnInit = function () {
        var actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.slice(this.start, this.end);
        if (this.overflow === true) {
            this.el.nativeElement.textContent = actualText + "...";
        }
        else {
            this.el.nativeElement.textContent = actualText;
        }
    };
    StringcutDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], StringcutDirective.prototype, "start", void 0);
    __decorate([
        Input()
    ], StringcutDirective.prototype, "end", void 0);
    __decorate([
        Input()
    ], StringcutDirective.prototype, "overflow", void 0);
    StringcutDirective = __decorate([
        Directive({
            selector: '[ngxStringSlicer]'
        })
    ], StringcutDirective);
    return StringcutDirective;
}());
export { StringcutDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nY3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpbmdzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvc3RyaW5nY3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLaEY7SUFNRSw0QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN4RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUNoRDtJQUNILENBQUM7O2dCQVp1QixVQUFVO2dCQUFvQixTQUFTOztJQUp0RDtRQUFSLEtBQUssRUFBRTtxREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO21EQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7d0RBQW1CO0lBSmhCLGtCQUFrQjtRQUg5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1NBQzlCLENBQUM7T0FDVyxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U3RyaW5nU2xpY2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nY3V0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzdGFydDogbnVtYmVyO1xuICBASW5wdXQoKSBlbmQ6IG51bWJlcjtcbiAgQElucHV0KCkgb3ZlcmZsb3c6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgYWN0dWFsVGV4dDogc3RyaW5nO1xuICAgIGFjdHVhbFRleHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgYWN0dWFsVGV4dCA9IGFjdHVhbFRleHQuc2xpY2UodGhpcy5zdGFydCwgdGhpcy5lbmQpXG4gICAgaWYgKHRoaXMub3ZlcmZsb3cgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IGFjdHVhbFRleHQgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBhY3R1YWxUZXh0O1xuICAgIH1cbiAgfVxufVxuIl19