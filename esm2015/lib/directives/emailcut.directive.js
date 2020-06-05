import { __decorate } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
let EmailcutDirective = class EmailcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
        actualText = this.el.nativeElement.textContent;
        if (actualText.includes('@') && actualText.includes('.')) {
            let email = actualText.split('@');
            let pre = '';
            let post = '';
            pre = email[0].trim();
            post = email[1].trim();
            pre = pre.slice(0, -5);
            post = post.substr(1, post.length);
            this.el.nativeElement.textContent = pre + '****' + post;
        }
        else {
            this.el.nativeElement.textContent = this.invalid;
            this.renderer.setStyle(this.el.nativeElement, 'color', 'crimson');
            this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
        }
    }
};
EmailcutDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], EmailcutDirective.prototype, "invalid", void 0);
EmailcutDirective = __decorate([
    Directive({
        selector: '[ngxEmailSlicer]'
    })
], EmailcutDirective);
export { EmailcutDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxjdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmluZ3MvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lbWFpbGN1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEUsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFHNUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Q0FDRixDQUFBOztZQXRCeUIsVUFBVTtZQUFvQixTQUFTOztBQUR0RDtJQUFSLEtBQUssRUFBRTtrREFBaUI7QUFGZCxpQkFBaUI7SUFIN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO0dBQ1csaUJBQWlCLENBeUI3QjtTQXpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEVtYWlsU2xpY2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgRW1haWxjdXREaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIGludmFsaWQ6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgYWN0dWFsVGV4dDogc3RyaW5nO1xuICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZCA6ICdJbnZhbGlkIEVtYWlsISc7XG4gICAgYWN0dWFsVGV4dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBpZiAoYWN0dWFsVGV4dC5pbmNsdWRlcygnQCcpICYmIGFjdHVhbFRleHQuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgbGV0IGVtYWlsID0gYWN0dWFsVGV4dC5zcGxpdCgnQCcpO1xuICAgICAgbGV0IHByZSA9ICcnO1xuICAgICAgbGV0IHBvc3QgPSAnJztcbiAgICAgIHByZSA9IGVtYWlsWzBdLnRyaW0oKTtcbiAgICAgIHBvc3QgPSBlbWFpbFsxXS50cmltKCk7XG4gICAgICBwcmUgPSBwcmUuc2xpY2UoMCwgLTUpO1xuICAgICAgcG9zdCA9IHBvc3Quc3Vic3RyKDEsIHBvc3QubGVuZ3RoKTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IHByZSArICcqKioqJyArIHBvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuaW52YWxpZDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnY29sb3InLCAnY3JpbXNvbicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmb250LXdlaWdodCcsICdib2xkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=