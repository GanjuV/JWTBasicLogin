import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order/order.service';
import { AnimationHelper } from '../router.animations';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [AnimationHelper.moveIn, AnimationHelper.fallIn]
})
export class AdminComponent implements OnInit {
  orders: [number];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(result => this.orders = result);
  }

}
