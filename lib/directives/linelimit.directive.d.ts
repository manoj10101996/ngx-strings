import { ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class LinelimitDirective implements OnInit {
    private el;
    private renderer;
    lines: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
