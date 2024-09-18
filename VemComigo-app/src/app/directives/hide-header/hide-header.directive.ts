import { AfterContentChecked, Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController, ScrollCustomEvent } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements OnInit, AfterContentChecked {
  @Input('appHideHeader') header: any;
  private headerHeight: number = 44;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) {}

  ngOnInit(): void {
    this.header = this.header.el;
  }

  ngAfterContentChecked(): void {
    this.domCtrl.read(() => {
      if (this.header !== null) this.headerHeight = this.header.clientHeight;
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: ScrollCustomEvent) {
    const scrollTop = $event.detail.scrollTop;
    let newPosition = -(scrollTop / 5);

    if (newPosition < -this.headerHeight) newPosition = -this.headerHeight;

    const opacity = 1 - newPosition / -this.headerHeight;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', `${newPosition}px`);
      this.renderer.setStyle(this.header, 'opacity', opacity);
    });
  }
}
