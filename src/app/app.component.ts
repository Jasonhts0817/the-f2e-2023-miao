import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      AOS.init({
        easing: 'ease-in-back',
        offset: 200,
        once: true,
        throttleDelay: 1,
      });
    }, 1500);
  }
}
