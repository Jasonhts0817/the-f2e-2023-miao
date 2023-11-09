import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as lottie from 'lottie-web';
@Component({
  selector: 'app-loading',
  template: `
    <div
      *ngIf="showOverlay"
      #loadingContainer
      class="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-white"
    >
      <div #loading class="h-246px w-[220px]"></div>
    </div>
  `,
})
export class LoadingComponent implements AfterViewInit {
  @ViewChild('loadingContainer') loadingContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('loading') loading!: ElementRef<HTMLDivElement>;
  showOverlay = true;

  constructor(private ref: ElementRef) {}

  ngAfterViewInit(): void {
    const loading = lottie.default.loadAnimation({
      container: this.loading.nativeElement, // the dom element that will contain the animation
      renderer: 'svg',
      autoplay: true,
      path: 'assets/lottie/loading.json', // the path to the animation json
    });
    this.showLoadingPage();
    setTimeout(() => {}, 1000);
    loading.addEventListener('loopComplete', () => {
      loading.stop();
      this.hideLoadingPage();
    });
  }

  showLoadingPage() {
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('h-[100dvh]');
    this.showOverlay = true;
  }

  hideLoadingPage() {
    this.loadingContainer.nativeElement.classList.add('animate-fadeOut');
    this.loadingContainer.nativeElement.classList.add('opacity-0');
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('h-[100dvh]');
    setTimeout(() => (this.showOverlay = false), 500);
  }
}
