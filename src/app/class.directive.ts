import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appClass]'
})
export class ClassDirective {

    constructor (private element: ElementRef) {}

    @Input('appClass') set classNames (cssClassesObj: any) {
        for (let key in cssClassesObj) {
            if (cssClassesObj[key]) this.element.nativeElement.classList.add(key)
            else this.element.nativeElement.classList.remove(key)
        }
    }
}
