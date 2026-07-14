import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  email = 'sanchezmartinez13221@gmail.com';
  showToast = signal(false);
  private toastTimeout: any;

  public copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.showToast.set(true);

      clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        this.showToast.set(false);
      }, 2500);
    });
  }
}
