import { ViewportScroller } from '@angular/common';
import { Attribute, Directive, ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ScrollService {
    scroll(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}