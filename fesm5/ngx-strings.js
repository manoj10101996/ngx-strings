import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, ElementRef, Renderer2, Directive, Input, NgModule } from '@angular/core';

var NgxStringsService = /** @class */ (function () {
    function NgxStringsService() {
    }
    NgxStringsService.ɵprov = ɵɵdefineInjectable({ factory: function NgxStringsService_Factory() { return new NgxStringsService(); }, token: NgxStringsService, providedIn: "root" });
    NgxStringsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], NgxStringsService);
    return NgxStringsService;
}());

var NgxStringsComponent = /** @class */ (function () {
    function NgxStringsComponent() {
    }
    NgxStringsComponent.prototype.ngOnInit = function () {
    };
    NgxStringsComponent = __decorate([
        Component({
            selector: 'lib-ngx-strings',
            template: "\n    <p>\n      ngx-strings works!\n    </p>\n  "
        })
    ], NgxStringsComponent);
    return NgxStringsComponent;
}());

var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'uppercase');
    }
    UppercaseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    UppercaseDirective = __decorate([
        Directive({
            selector: '[ngxUpperCase]'
        })
    ], UppercaseDirective);
    return UppercaseDirective;
}());

var LowercaseDirective = /** @class */ (function () {
    function LowercaseDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'lowercase');
    }
    LowercaseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LowercaseDirective = __decorate([
        Directive({
            selector: '[ngxLowerCase]'
        })
    ], LowercaseDirective);
    return LowercaseDirective;
}());

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

var InitialcaseDirective = /** @class */ (function () {
    function InitialcaseDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.setStyle(this.el.nativeElement, 'text-transform', 'initial');
    }
    InitialcaseDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    InitialcaseDirective = __decorate([
        Directive({
            selector: '[ngxInitialCase]'
        })
    ], InitialcaseDirective);
    return InitialcaseDirective;
}());

var LinelimitDirective = /** @class */ (function () {
    function LinelimitDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    LinelimitDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
        this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
        this.renderer.setStyle(this.el.nativeElement, '-webkit-line-clamp', this.lines);
        this.renderer.setStyle(this.el.nativeElement, '-webkit-box-orient', 'vertical');
    };
    LinelimitDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], LinelimitDirective.prototype, "lines", void 0);
    LinelimitDirective = __decorate([
        Directive({
            selector: '[ngxLineLimit]'
        })
    ], LinelimitDirective);
    return LinelimitDirective;
}());

var StringcutDirective = /** @class */ (function () {
    function StringcutDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    StringcutDirective.prototype.ngOnInit = function () {
        var actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.slice(this.start, this.end);
        if (this.overflow === true) {
            this.el.nativeElement.textContent = actualText + "...";
        }
        else {
            this.el.nativeElement.textContent = actualText;
        }
    };
    StringcutDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return StringcutDirective;
}());

var EmailcutDirective = /** @class */ (function () {
    function EmailcutDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    EmailcutDirective.prototype.ngOnInit = function () {
        var actualText;
        this.invalid = this.invalid ? this.invalid : 'Invalid Email!';
        actualText = this.el.nativeElement.textContent;
        if (actualText.includes('@') && actualText.includes('.')) {
            var email = actualText.split('@');
            var pre = '';
            var post = '';
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
    };
    EmailcutDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], EmailcutDirective.prototype, "invalid", void 0);
    EmailcutDirective = __decorate([
        Directive({
            selector: '[ngxEmailSlicer]'
        })
    ], EmailcutDirective);
    return EmailcutDirective;
}());

var ReplacerDirective = /** @class */ (function () {
    function ReplacerDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ReplacerDirective.prototype.ngOnInit = function () {
        var find = this.from;
        var re = new RegExp(find, 'g');
        var actualText;
        actualText = this.el.nativeElement.textContent;
        actualText = actualText.replace(re, this.to);
        this.el.nativeElement.textContent = actualText;
    };
    ReplacerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return ReplacerDirective;
}());

var NgxStringsModule = /** @class */ (function () {
    function NgxStringsModule() {
    }
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
    return NgxStringsModule;
}());

/*
 * Public API Surface of ngx-strings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxStringsComponent, NgxStringsModule, NgxStringsService, UppercaseDirective as ɵa, LowercaseDirective as ɵb, TitlecaseDirective as ɵc, InitialcaseDirective as ɵd, LinelimitDirective as ɵe, StringcutDirective as ɵf, EmailcutDirective as ɵg, ReplacerDirective as ɵh };
//# sourceMappingURL=ngx-strings.js.map
