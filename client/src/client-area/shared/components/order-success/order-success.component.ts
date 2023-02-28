import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { HideService } from '../../services/hide.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent {
  Tick = faCircleCheck;
  orderId: string;
  myDate: Date;

  constructor(private hide: HideService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.hide.hide();
    this.orderId = this.route.snapshot.paramMap.get('orderid');
    this.myDate = new Date();
    this.myDate.setDate(this.myDate.getDate() + 4);
  }

  ngOnDestroy() {
    this.hide.show();
  }
}
