import { ElementRef, Renderer2 } from '@angular/core';
export declare class EmailcutDirective {
    private el;
    private renderer;
    invalid: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
