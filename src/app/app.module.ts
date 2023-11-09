import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element';

import { AppComponent } from './app.component';

import { DialogModule } from '@angular/cdk/dialog';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './shared/loading.component';
import { ServiceWorkerModule } from '@angular/service-worker';
const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page.component').then(
        (mod) => mod.LandingPageComponent,
      ),
  },
];
@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    DialogModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:5000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    register();
  }
}
