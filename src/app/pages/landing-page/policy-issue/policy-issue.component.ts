import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types/swiper-options';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from 'swiper/modules';
import { Theme } from '../../../core/enums/theme.enum';
import { Icon } from '../../../core/enums/icon.enum';
import {
  Post,
  PostComponent,
} from '../../../shared/dialogs/post/post.component';
import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { IconComponent } from 'src/app/shared/icon.component';
import { ButtonComponent } from 'src/app/shared/button.component';
import { ChipComponent } from 'src/app/shared/chip.component';
import { TitleComponent } from 'src/app/shared/title.component';

@Component({
  selector: 'app-policy-issue',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    ButtonComponent,
    ChipComponent,
    TitleComponent,
  ],
  templateUrl: './policy-issue.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
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

  policyIssueList: Post[] = [
    {
      id: 1,
      tag: '喵的福利',
      title: '打造休閒天堂！\r\n推廣寵物休閒與娛樂場所',
      article: [
        {
          title: '寵物友善公園',
          desc: '設有特定的寵物遊樂設施，如狗狗運動場和貓咪攀爬架，同時也需要提供垃圾桶和清潔設施，以確保場地的衛生和安全',
        },
        {
          title: '寵物友善服務',
          desc: '通過提供獎勵和支持，鼓勵餐廳、咖啡廳、購物中心等商家成為寵物友善場所',
        },
      ],
      theme: Theme.Green,
      imgUrl: {
        png: 'assets/images/png/image-6.png',
        webp: 'assets/images/webp/image-6.webp',
      },
    },
    {
      id: 2,
      tag: '喵的福利',
      title: '為毛孩子謀福利！\r\n推動寵物醫療保障方案',
      article: [
        {
          title: '設立寵物醫療基金',
          desc: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
        },
        {
          title: '提供醫療補助',
          desc: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
        },
        {
          title: '合作動物醫院',
          desc: '目前已有和超過 200 家動物醫院進行初步的合作討論',
        },
      ],
      theme: Theme.Primary,
      imgUrl: {
        png: 'assets/images/png/image-5.png',
        webp: 'assets/images/webp/image-5.webp',
      },
    },
    {
      id: 3,
      tag: '喵的福利',
      title: '推廣寵物飼養教育，\r\n讓愛更加專業',
      article: [
        {
          title: '寵物訓練和教育資源',
          desc: '提供寵物訓練課程和教育資源，以幫助寵物主人更好地理解和照顧他們的寵物',
        },
        {
          title: '建立寵物飼養資源中心',
          desc: '建立一個中心，提供有關寵物飼養的資源，包括飼養建議、緊急情況下的救援計劃以及尋找寵物領養的信息，使人們更容易獲取專業的寵物飼養知識',
        },
      ],
      theme: Theme.Pink,
      imgUrl: {
        png: 'assets/images/png/image-9.png',
        webp: 'assets/images/webp/image-9.webp',
      },
    },
  ];

  get displayPolicyIssues() {
    return [...this.policyIssueList, ...this.policyIssueList];
  }
  constructor(private dialog: Dialog) {}

  ngAfterViewInit(): void {
    Object.assign(this.swiper.nativeElement, this.swiperConfig);
    this.swiper.nativeElement.initialize();
  }

  openPostDialog(post: Post) {
    this.dialog.open(PostComponent, {
      data: {
        title: '政策議題',
        morePostTitle: '更多政策議題',
        currentPost: post,
        posts: this.policyIssueList,
      },
    });
  }
}
