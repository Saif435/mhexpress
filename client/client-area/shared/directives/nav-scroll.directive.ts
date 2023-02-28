import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavScroll]',
})
export class NavScrollDirective {
  constructor() {}
  lastScrollY = 0;
  @HostBinding('class.navStyle') navStyle: boolean;

  @HostListener('window:scroll') onSroll() {
    if (window.scrollY > this.lastScrollY) {
      this.navStyle = true;
    } else {
      this.navStyle = false;
    }
    this.lastScrollY = window.scrollY;
  }
}
