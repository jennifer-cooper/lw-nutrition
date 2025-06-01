import { Component, input, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styles: [`
    .clamp-preview {
      max-height: 4.5em; /* Approx. 2 lines */
      overflow: hidden;
      position: relative;
      mask-image: linear-gradient(to bottom, black 60%, transparent);
    }

    .clamp-full {
      max-height: none;
      overflow: visible;
      mask-image: none;
    }

    .clamp-preview::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5em;
      background: linear-gradient(to bottom, transparent, white);
      pointer-events: none;
    }
  `],
  imports: [
    NgClass,
    RouterModule,
    NgIf
  ]
})
export class ServiceCardComponent {
  title = input<string>();
  description = input<string>();
  expanded = signal(false);

  toggle(): void {
    this.expanded.update(v => !v);
  }
}
