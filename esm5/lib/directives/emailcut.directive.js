import { __decorate } from "tslib";
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
var EmailcutDirective = /** @class */ (function () {
    function EmailcutDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    EmailcutDirective.prototype.ngOnInit = function () {
        var actualText;
        this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
        actualText = this.el.nativeElement.textContent;
        if (actualText.includes('@') && actualText.includes('.')) {
            var email = actualText.split('@');
            var pre = '';
            var post = '';
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
    };
    EmailcutDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], EmailcutDirective.prototype, "invalid", void 0);
    EmailcutDirective = __decorate([
        Directive({
            selector: '[ngxEmailSlicer]'
        })
    ], EmailcutDirective);
    return EmailcutDirective;
}());
export { EmailcutDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxjdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmluZ3MvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lbWFpbGN1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEU7SUFHRSwyQkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxVQUFrQixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7UUFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNkLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7O2dCQXJCdUIsVUFBVTtnQkFBb0IsU0FBUzs7SUFEdEQ7UUFBUixLQUFLLEVBQUU7c0RBQWlCO0lBRmQsaUJBQWlCO1FBSDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztPQUNXLGlCQUFpQixDQXlCN0I7SUFBRCx3QkFBQztDQUFBLEFBekJELElBeUJDO1NBekJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4RW1haWxTbGljZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBFbWFpbGN1dERpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgaW52YWxpZDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBhY3R1YWxUZXh0OiBzdHJpbmc7XG4gICAgdGhpcy5pbnZhbGlkID0gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkIDogJ0ludmFsaWQgRW1haWwhJztcbiAgICBhY3R1YWxUZXh0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGlmIChhY3R1YWxUZXh0LmluY2x1ZGVzKCdAJykgJiYgYWN0dWFsVGV4dC5pbmNsdWRlcygnLicpKSB7XG4gICAgICBsZXQgZW1haWwgPSBhY3R1YWxUZXh0LnNwbGl0KCdAJyk7XG4gICAgICBsZXQgcHJlID0gJyc7XG4gICAgICBsZXQgcG9zdCA9ICcnO1xuICAgICAgcHJlID0gZW1haWxbMF0udHJpbSgpO1xuICAgICAgcG9zdCA9IGVtYWlsWzFdLnRyaW0oKTtcbiAgICAgIHByZSA9IHByZS5zbGljZSgwLCAtNSk7XG4gICAgICBwb3N0ID0gcG9zdC5zdWJzdHIoMSwgcG9zdC5sZW5ndGgpO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gcHJlICsgJyoqKionICsgcG9zdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5pbnZhbGlkO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjb2xvcicsICdjcmltc29uJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==