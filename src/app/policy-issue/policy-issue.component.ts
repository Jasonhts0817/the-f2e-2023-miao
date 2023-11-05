import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types/swiper-options';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from 'swiper/modules';
import { Theme } from '../core/enums/theme.enum';
import { Icon } from '../core/enums/icon.enum';

@Component({
  selector: 'app-policy-issue',
  templateUrl: './policy-issue.component.html',
  styleUrls: ['./policy-issue.component.scss'],
})
export class PolicyIssueComponent implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  Theme = Theme;
  Icon = Icon;
  swiperConfig: SwiperOptions = {
    modules: [EffectCoverflow, Pagination, Navigation, Keyboard],
    effect: 'coverflow',
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1.2,
    initialSlide: 1,
    loop: true,
    keyboard: {
      onlyInViewport: true,
      enabled: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: -30,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      clickable: true,
      el: '.policy-issue-pagination',
      bulletActiveClass: 'pagination-bullet-active',
      bulletClass: 'pagination-bullet',
      horizontalClass: 'pagination-horizontal',
    },
    navigation: {
      enabled: true,
      nextEl: '.policy-issue-next-button',
      prevEl: '.policy-issue-prev-button',
    },
    breakpoints: {
      '768': {
        slidesPerView: 1.8,
        coverflowEffect: {
          stretch: -60,
        },
      },
      '1200': {
        slidesPerView: 2.5,
        coverflowEffect: {
          stretch: -100,
        },
      },
    },
  };

  policyIssueList: PolicyIssue[] = [
    {
      tag: '喵的福利',
      desc: '打造休閒天堂！\r\n推廣寵物休閒與娛樂場所',
      theme: Theme.Green,
      imgUrl: {
        png: 'assets/images/png/image-6.png',
        webp: 'assets/images/webp/image-6.webp',
      },
    },
    {
      tag: '喵的福利',
      desc: '為毛孩子謀福利！\r\n推動寵物醫療保障方案',
      theme: Theme.Primary,
      imgUrl: {
        png: 'assets/images/png/image-5.png',
        webp: 'assets/images/webp/image-5.webp',
      },
    },
    {
      tag: '喵的福利',
      desc: '推廣寵物飼養教育，\r\n讓愛更加專業',
      theme: Theme.Pink,
      imgUrl: {
        png: 'assets/images/png/image-9.png',
        webp: 'assets/images/webp/image-9.webp',
      },
    },
    {
      tag: '喵的福利',
      desc: '打造休閒天堂！\r\n推廣寵物休閒與娛樂場所',
      theme: Theme.Green,
      imgUrl: {
        png: 'assets/images/png/image-6.png',
        webp: 'assets/images/webp/image-6.webp',
      },
    },
    {
      tag: '喵的福利',
      desc: '為毛孩子謀福利！\r\n推動寵物醫療保障方案',
      theme: Theme.Primary,
      imgUrl: {
        png: 'assets/images/png/image-5.png',
        webp: 'assets/images/webp/image-5.webp',
      },
    },
    {
      tag: '喵的福利',
      desc: '推廣寵物飼養教育，\r\n讓愛更加專業',
      theme: Theme.Pink,
      imgUrl: {
        png: 'assets/images/png/image-9.png',
        webp: 'assets/images/webp/image-9.webp',
      },
    },
  ];
  ngAfterViewInit(): void {
    Object.assign(this.swiper.nativeElement, this.swiperConfig);
    this.swiper.nativeElement.initialize();
  }
}

type PolicyIssue = {
  tag: string;
  desc: string;
  theme: Theme;
  imgUrl: {
    png: string;
    webp: string;
  };
};
