import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from 'src/app/shared/icon.component';
import { Icon } from 'src/app/core/enums/icon.enum';
import { Size } from 'src/app/core/enums/size.enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  Icon = Icon;
  Size = Size;
  isAosDone = false;
  ngOnInit(): void {
    setTimeout(() => (this.isAosDone = true), 3000);
  }
}
