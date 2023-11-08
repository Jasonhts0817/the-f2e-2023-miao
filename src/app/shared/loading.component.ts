import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import * as lottie from 'lottie-web';
@Component({
  selector: 'app-loading',
  template: `
    <div
      *ngIf="showOverlay"
      class="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-white"
    >
      <div #loading class="h-246px w-[220px]"></div>
    </div>
  `,
})
export class LoadingComponent implements AfterViewInit {
  @ViewChild('loading') loading!: ElementRef<HTMLDivElement>;
  showOverlay = true;

  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
  }

  ngAfterViewInit(): void {
    lottie.default.loadAnimation({
      container: this.loading.nativeElement, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/lottie/loading.json', // the path to the animation json
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    switch (true) {
      case event instanceof NavigationStart:
        document.body.classList.add('overflow-hidden');
        document.body.classList.add('h-[100dvh]');
        this.showOverlay = true;
        break;
      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError:
        setTimeout(() => {
          document.body.classList.remove('overflow-hidden');
          document.body.classList.add('h-[100dvh]');
          this.showOverlay = false;
        }, 2000);

        break;
    }
  }
}
