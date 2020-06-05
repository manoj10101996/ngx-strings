import { __decorate } from "tslib";
import { Directive, ElementRef, Renderer2 } from '@angular/core';
var TitlecaseDirective = /** @class */ (function () {
    function TitlecaseDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'capitalize');
    }
    TitlecaseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TitlecaseDirective = __decorate([
        Directive({
            selector: '[ngxTitleCase]'
        })
    ], TitlecaseDirective);
    return TitlecaseDirective;
}());
export { TitlecaseDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpbmdzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGl0bGVjYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2pFO0lBRUUsNEJBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkFGdUIsVUFBVTtnQkFBb0IsU0FBUzs7SUFGcEQsa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztPQUNXLGtCQUFrQixDQU05QjtJQUFELHlCQUFDO0NBQUEsQUFORCxJQU1DO1NBTlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFRpdGxlQ2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlY2FzZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0ZXh0LXRyYW5zZm9ybScsICdjYXBpdGFsaXplJyk7XG4gIH1cblxufVxuIl19