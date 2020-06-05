import { __decorate } from "tslib";
import { Directive, ElementRef, Renderer2 } from '@angular/core';
let InitialcaseDirective = class InitialcaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'initial');
    }
};
InitialcaseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
InitialcaseDirective = __decorate([
    Directive({
        selector: '[ngxInitialCase]'
    })
], InitialcaseDirective);
export { InitialcaseDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGNhc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXN0cmluZ3MvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9pbml0aWFsY2FzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtqRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUUvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUVGLENBQUE7O1lBSnlCLFVBQVU7WUFBb0IsU0FBUzs7QUFGcEQsb0JBQW9CO0lBSGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7S0FDN0IsQ0FBQztHQUNXLG9CQUFvQixDQU1oQztTQU5ZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hJbml0aWFsQ2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIEluaXRpYWxjYXNlRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RleHQtdHJhbnNmb3JtJywgJ2luaXRpYWwnKTtcbiAgfVxuXG59XG4iXX0=