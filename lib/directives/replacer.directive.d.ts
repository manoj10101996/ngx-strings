import { ElementRef, Renderer2 } from '@angular/core';
export declare class ReplacerDirective {
    private el;
    private renderer;
    from: string;
    to: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
