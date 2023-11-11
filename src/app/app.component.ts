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
        once: true,
        offset: 100,
      });
      document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated in', detail);
      });
      document.addEventListener('aos:out', ({ detail }) => {
        console.log('animated out', detail);
      });
    }, 1500);
  }
}
