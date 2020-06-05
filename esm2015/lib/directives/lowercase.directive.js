import { __decorate } from "tslib";
import { Directive, ElementRef, Renderer2 } from '@angular/core';
let LowercaseDirective = class LowercaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'lowercase');
    }
};
LowercaseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
LowercaseDirective = __decorate([
    Directive({
        selector: '[ngxLowerCase]'
    })
], LowercaseDirective);
export { LowercaseDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93ZXJjYXNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zdHJpbmdzLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbG93ZXJjYXNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2pFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRTdCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBRUYsQ0FBQTs7WUFKeUIsVUFBVTtZQUFvQixTQUFTOztBQUZwRCxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO0dBQ1csa0JBQWtCLENBTTlCO1NBTlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neExvd2VyQ2FzZV0nXG59KVxuZXhwb3J0IGNsYXNzIExvd2VyY2FzZURpcmVjdGl2ZSB7XG4gXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGV4dC10cmFuc2Zvcm0nLCAnbG93ZXJjYXNlJyk7XG4gIH1cblxufVxuIl19