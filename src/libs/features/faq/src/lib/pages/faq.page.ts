import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'faq-page',
  standalone: true,
  templateUrl: './faq.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    details summary::-webkit-details-marker {
      display: none;
    }
    details > summary i {
      transition: transform 0.3s ease;
    }

    details[open] > summary i {
      transform: rotate(180deg);
    }
  `],
  imports: [RouterModule],
})
export class FaqPage {}
