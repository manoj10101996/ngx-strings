import { ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class StringcutDirective implements OnInit {
    private el;
    private renderer;
    start: number;
    end: number;
    overflow: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
