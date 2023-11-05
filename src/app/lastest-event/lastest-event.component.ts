import { Component } from '@angular/core';
import { Theme } from '../core/enums/theme.enum';

@Component({
  selector: 'app-lastest-event',
  templateUrl: './lastest-event.component.html',
  styleUrls: ['./lastest-event.component.scss'],
})
export class LastestEventComponent {
  Theme = Theme;
  lastestEventList = [
    {
      date: '2023/12/26',
      title: '參與台北寵物論壇，爭取貓咪友善環境',
      desc: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
      imgUrl: {
        png: 'assets/images/png/event-1.png',
        webp: 'assets/images/webp/event-1.webp',
      },
    },
    {
      date: '2023/12/24',
      title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
      desc: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
      imgUrl: {
        png: 'assets/images/png/event-2.png',
        webp: 'assets/images/webp/event-2.webp',
      },
    },
    {
      date: '2023/12/20',
      title: '收容所模特兒大比拼！',
      desc: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
      imgUrl: {
        png: 'assets/images/png/event-3.png',
        webp: 'assets/images/webp/event-3.webp',
      },
    },
    {
      date: '2023/12/18',
      title: '參與台北寵物論壇，爭取貓咪友善環境',
      desc: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
      imgUrl: {
        png: 'assets/images/png/event-1.png',
        webp: 'assets/images/webp/event-1.webp',
      },
    },
  ];
}
