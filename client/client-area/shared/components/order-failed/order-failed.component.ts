import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { HideService } from '../../services/hide.service';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.css'],
})
export class OrderFailedComponent {
  Failed = 'assets/paymentfailed.png';
  constructor(
    private hide: HideService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.hide.hide();
    this.loadingService.requestEnded();
  }

  navigateToShop() {
    this.router.navigate(['shop']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.hide.show();
  }
}
