import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, ElementRef, Renderer2, Directive, Input, NgModule } from '@angular/core';

let NgxStringsService = class NgxStringsService {
    constructor() { }
};
NgxStringsService.ɵprov = ɵɵdefineInjectable({ factory: function NgxStringsService_Factory() { return new NgxStringsService(); }, token: NgxStringsService, providedIn: "root" });
NgxStringsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NgxStringsService);

let NgxStringsComponent = class NgxStringsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NgxStringsComponent = __decorate([
    Component({
        selector: 'lib-ngx-strings',
        template: `
    <p>
      ngx-strings works!
    </p>
  `
    })
], NgxStringsComponent);

let UppercaseDirective = class UppercaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'uppercase');
    }
};
UppercaseDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
UppercaseDirective = __decorate([
    Directive({
        selector: '[ngxUpperCase]'
    })
], UppercaseDirective);

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

let StringcutDirective = class StringcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.slice(this.start, this.end);
        if (this.overflow === true) {
            this.el.nativeElement.textContent = actualText + "...";
        }
        else {
            this.el.nativeElement.textContent = actualText;
        }
    }
};
StringcutDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], StringcutDirective.prototype, "start", void 0);
__decorate([
    Input()
], StringcutDirective.prototype, "end", void 0);
__decorate([
    Input()
], StringcutDirective.prototype, "overflow", void 0);
StringcutDirective = __decorate([
    Directive({
        selector: '[ngxStringSlicer]'
    })
], StringcutDirective);

let EmailcutDirective = class EmailcutDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let actualText;
        this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
        actualText = this.el.nativeElement.textContent;
        if (actualText.includes('@') && actualText.includes('.')) {
            let email = actualText.split('@');
            let pre = '';
            let post = '';
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
    }
};
EmailcutDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], EmailcutDirective.prototype, "invalid", void 0);
EmailcutDirective = __decorate([
    Directive({
        selector: '[ngxEmailSlicer]'
    })
], EmailcutDirective);

let ReplacerDirective = class ReplacerDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        let find = this.from;
        let re = new RegExp(find, 'g');
        let actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.replace(re, this.to);
        this.el.nativeElement.textContent = actualText;
    }
};
ReplacerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input()
], ReplacerDirective.prototype, "from", void 0);
__decorate([
    Input()
], ReplacerDirective.prototype, "to", void 0);
ReplacerDirective = __decorate([
    Directive({
        selector: '[ngxStringReplacer]'
    })
], ReplacerDirective);

let NgxStringsModule = class NgxStringsModule {
};
NgxStringsModule = __decorate([
    NgModule({
        declarations: [
            NgxStringsComponent,
            UppercaseDirective,
            LowercaseDirective,
            TitlecaseDirective,
            InitialcaseDirective,
            LinelimitDirective,
            StringcutDirective,
            EmailcutDirective,
            ReplacerDirective
        ],
        imports: [],
        exports: [
            NgxStringsComponent,
            UppercaseDirective,
            LowercaseDirective,
            TitlecaseDirective,
            InitialcaseDirective,
            LinelimitDirective,
            StringcutDirective,
            EmailcutDirective,
            ReplacerDirective
        ]
    })
], NgxStringsModule);

/*
 * Public API Surface of ngx-strings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxStringsComponent, NgxStringsModule, NgxStringsService, UppercaseDirective as ɵa, LowercaseDirective as ɵb, TitlecaseDirective as ɵc, InitialcaseDirective as ɵd, LinelimitDirective as ɵe, StringcutDirective as ɵf, EmailcutDirective as ɵg, ReplacerDirective as ɵh };
//# sourceMappingURL=ngx-strings.js.map
