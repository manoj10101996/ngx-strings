import { __decorate } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
var ReplacerDirective = /** @class */ (function () {
    function ReplacerDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ReplacerDirective.prototype.ngOnInit = function () {
        var find = this.from;
        var re = new RegExp(find, 'g');
        var actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.replace(re, this.to);
        this.el.nativeElement.textContent = actualText;
    };
    ReplacerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return ReplacerDirective;
}());
export { ReplacerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmluZ3MvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9yZXBsYWNlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEU7SUFLRSwyQkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2pELENBQUM7O2dCQVh1QixVQUFVO2dCQUFvQixTQUFTOztJQUh0RDtRQUFSLEtBQUssRUFBRTttREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFO2lEQUFZO0lBSFQsaUJBQWlCO1FBSDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztPQUNXLGlCQUFpQixDQWlCN0I7SUFBRCx3QkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U3RyaW5nUmVwbGFjZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXBsYWNlckRpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgZnJvbTogc3RyaW5nO1xuICBASW5wdXQoKSB0bzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGZpbmQgPSB0aGlzLmZyb207XG4gICAgbGV0IHJlID0gbmV3IFJlZ0V4cChmaW5kLCAnZycpO1xuXG4gICAgbGV0IGFjdHVhbFRleHQ6IHN0cmluZztcbiAgICBhY3R1YWxUZXh0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGFjdHVhbFRleHQgPSBhY3R1YWxUZXh0LnJlcGxhY2UocmUsIHRoaXMudG8pO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IGFjdHVhbFRleHQ7XG4gIH1cbn1cbiJdfQ==