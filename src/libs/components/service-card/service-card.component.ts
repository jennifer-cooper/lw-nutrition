import { Component, input, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
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
