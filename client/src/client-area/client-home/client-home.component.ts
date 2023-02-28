import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],
})
export class ClientHomeComponent {
  Home = 'assets/home.png';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToShop() {
    let navigationExtras: NavigationExtras = {
      queryParams: { page: 1 },
    };
    this.router.navigate(['shop/all'], navigationExtras);
  }
}
