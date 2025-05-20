import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ServiceCardComponent } from '../../../../../components/service-card/service-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    ServiceCardComponent,
    RouterModule
  ]
})
export class HomePage {}
