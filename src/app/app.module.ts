import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element';

import { AppComponent } from './app.component';

import { DialogModule } from '@angular/cdk/dialog';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './shared/loading.component';
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
  imports: [BrowserModule, DialogModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    register();
  }
}
