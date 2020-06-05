import { __decorate } from "tslib";
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
let LinelimitDirective = class LinelimitDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
        this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-line-clamp', this.lines);
        this.renderer.setStyle(this.el.nativeElement, '-webkit-box-orient', 'vertical');
    }
};
LinelimitDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], LinelimitDirective.prototype, "lines", void 0);
LinelimitDirective = __decorate([
    Directive({
        selector: '[ngxLineLimit]'
    })
], LinelimitDirective);
export { LinelimitDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWxpbWl0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpbmdzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGluZWxpbWl0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLaEYsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFHN0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBRS9ELENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUVGLENBQUE7O1lBVnlCLFVBQVU7WUFBb0IsU0FBUzs7QUFEdEQ7SUFBUixLQUFLLEVBQUU7aURBQWU7QUFGWixrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO0dBQ1csa0JBQWtCLENBYTlCO1NBYlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neExpbmVMaW1pdF0nXG59KVxuZXhwb3J0IGNsYXNzIExpbmVsaW1pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGluZXM6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICctd2Via2l0LWJveCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLXdlYmtpdC1saW5lLWNsYW1wJywgdGhpcy5saW5lcyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LWJveC1vcmllbnQnLCAndmVydGljYWwnKTtcbiAgfVxuXG59XG4iXX0=