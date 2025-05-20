import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'privacy-policy-page',
  standalone: true,
  templateUrl: './privacy-policy-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class PrivacyPolicyPage {}
