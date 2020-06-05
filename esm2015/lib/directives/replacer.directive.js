import { __decorate } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
let ReplacerDirective = class ReplacerDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let find = this.from;
        let re = new RegExp(find, 'g');
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.replace(re, this.to);
        this.el.nativeElement.textContent = actualText;
    }
};
ReplacerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], ReplacerDirective.prototype, "from", void 0);
__decorate([
    Input()
], ReplacerDirective.prototype, "to", void 0);
ReplacerDirective = __decorate([
    Directive({
        selector: '[ngxStringReplacer]'
    })
], ReplacerDirective);
export { ReplacerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmluZ3MvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yZXBsYWNlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFLNUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2pELENBQUM7Q0FDRixDQUFBOztZQVp5QixVQUFVO1lBQW9CLFNBQVM7O0FBSHREO0lBQVIsS0FBSyxFQUFFOytDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7NkNBQVk7QUFIVCxpQkFBaUI7SUFIN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQyxDQUFDO0dBQ1csaUJBQWlCLENBaUI3QjtTQWpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFN0cmluZ1JlcGxhY2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVwbGFjZXJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGZyb206IHN0cmluZztcbiAgQElucHV0KCkgdG86IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBmaW5kID0gdGhpcy5mcm9tO1xuICAgIGxldCByZSA9IG5ldyBSZWdFeHAoZmluZCwgJ2cnKTtcblxuICAgIGxldCBhY3R1YWxUZXh0OiBzdHJpbmc7XG4gICAgYWN0dWFsVGV4dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBhY3R1YWxUZXh0ID0gYWN0dWFsVGV4dC5yZXBsYWNlKHJlLCB0aGlzLnRvKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBhY3R1YWxUZXh0O1xuICB9XG59XG4iXX0=