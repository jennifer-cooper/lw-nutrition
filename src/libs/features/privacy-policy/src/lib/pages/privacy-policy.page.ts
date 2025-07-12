import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'privacy-policy-page',
  standalone: true,
  templateUrl: './privacy-policy-page.html',
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
  imports: [],
})
export class PrivacyPolicyPage {}
