import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  standalone: true,
  templateUrl: './contact.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class ContactPage {}
