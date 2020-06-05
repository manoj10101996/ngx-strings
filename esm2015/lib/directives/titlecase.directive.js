import { __decorate } from "tslib";
import { Directive, ElementRef, Renderer2 } from '@angular/core';
let TitlecaseDirective = class TitlecaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'capitalize');
    }
};
TitlecaseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TitlecaseDirective = __decorate([
    Directive({
        selector: '[ngxTitleCase]'
    })
], TitlecaseDirective);
export { TitlecaseDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpbmdzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGl0bGVjYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2pFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRTdCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUYsQ0FBQTs7WUFKeUIsVUFBVTtZQUFvQixTQUFTOztBQUZwRCxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO0dBQ1csa0JBQWtCLENBTTlCO1NBTlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFRpdGxlQ2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlY2FzZURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0ZXh0LXRyYW5zZm9ybScsICdjYXBpdGFsaXplJyk7XG4gIH1cblxufVxuIl19