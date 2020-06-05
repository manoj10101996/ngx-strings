<img src="https://image.flaticon.com/icons/svg/2921/2921724.svg" width="150px" title="String" alt="STAR">

# Scroll page to top button.

> String operations for angular 8+ projects (ng9)

> Creative scroll page button with mutiple color variance

# Preview demo

This preview was generated with [Stackblitz](https://stackblitz.com/edit/ngx-strings)
<!-- <img src="https://github.com/manoj10101996/ngx-strings/blob/master/ss.png?raw=true" width="100%" title="Scroll page" alt="scroll"> -->


# Angular version

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code integration

To use this package as a service `npm i ngx-strings` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-strings`   on root folder or else it will throw error.

## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxStringsModule } from "ngx-strings";

Then import the module as follow on imports array

>NgxStringsModule

## Using

After importing this library with `npm  install ngx-strings`, go to the component which is declared under `app.module.ts` and integrate as below. use it on any component or else declare it on `app.component.ts` for enabling it global to application.

## Integrataions module
### Email slicer
Directive | Usage
------------ | -------------
ngxEmailSlicer | Slicing / protecting the email string to user view. `(Validation included)`
Attributes |  `invalid` as string for custom error message
           
```HTML
  <span ngxEmailSlicer>
    manoj10101996gmail.com
  </span> <br>
  <span ngxEmailSlicer>
    violinhi@yahoo.com
  </span> <br>
  <span ngxEmailSlicer>
    staikos@optonline.net
  </span> <br>
  <span invalid="Error occured" ngxEmailSlicer>
    staikosoptonline.net
  </span>
  <br>
  <span invalid="Error occured" ngxEmailSlicer>
    staik@osoptonlinenet
  </span>
```
### String lines limitation `for all browsers - Responsive`
Directive | Usage
------------ | -------------
ngxLineLimit | Limiting the lines for user view. (ellipsis) `Responsive`
Attributes |  `lines` as number
 
```HTML
  <span lines="1" ngxLineLimit>
    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </span>
```
### String / Character replacer
Directive | Usage
------------ | -------------
ngxStringReplacer | Replacing the existing words with new words. (ellipsis) `Responsive`
Attributes |  `from` as string `to` as string
           
```HTML
  <span from="quis" to="HELLO" ngxStringReplacer>
    lorem quis dolor sit amet, consectetur quis elit, sed do quis tempor incididunt ut quis et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea quis consequat.
    Duis aute quis dolor in reprehenderit in voluptate velit quis cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat quis quis proident, quis in culpa qui quis deserunt mollit anim id est laborum.
  </span>
```

### String slicer - limiting the charaters
Directive | Usage
------------ | -------------
ngxStringSlicer | Slicing / Limiting the string using character count. (ellipsis) `Non-Responsive`
Attributes |  `start` as number `end` as number `overflow` as boolean (ellipsis) ...
           
```HTML
  <span start="0" end="10" overflow="true" ngxStringSlicer>
    lorem ipsum dolor sit amet, consectetur adipiscing el
  </span>
```
 
 
## Further help

To get more help on the usage  check out the [Ngx rating star README](https://github.com/manoj10101996/ngx-star-rating/blob/master/README.md).


