import { __decorate } from "tslib";
import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
let StringcutDirective = class StringcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.slice(this.start, this.end);
        if (this.overflow === true) {
            this.el.nativeElement.textContent = actualText + "...";
        }
        else {
            this.el.nativeElement.textContent = actualText;
        }
    }
};
StringcutDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { StringcutDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nY3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpbmdzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvc3RyaW5nY3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLaEYsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFNN0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN4RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUNoRDtJQUNILENBQUM7Q0FDRixDQUFBOztZQWJ5QixVQUFVO1lBQW9CLFNBQVM7O0FBSnREO0lBQVIsS0FBSyxFQUFFO2lEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7K0NBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTtvREFBbUI7QUFKaEIsa0JBQWtCO0lBSDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7S0FDOUIsQ0FBQztHQUNXLGtCQUFrQixDQW1COUI7U0FuQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFN0cmluZ1NsaWNlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ2N1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc3RhcnQ6IG51bWJlcjtcbiAgQElucHV0KCkgZW5kOiBudW1iZXI7XG4gIEBJbnB1dCgpIG92ZXJmbG93OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGFjdHVhbFRleHQ6IHN0cmluZztcbiAgICBhY3R1YWxUZXh0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGFjdHVhbFRleHQgPSBhY3R1YWxUZXh0LnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKVxuICAgIGlmICh0aGlzLm92ZXJmbG93ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBhY3R1YWxUZXh0ICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gYWN0dWFsVGV4dDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==