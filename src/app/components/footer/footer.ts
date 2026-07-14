import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  public currentYear: number = new Date().getFullYear();
}
