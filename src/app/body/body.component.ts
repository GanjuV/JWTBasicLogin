import { Component, OnInit } from '@angular/core';
import { AnimationHelper } from '../router.animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [AnimationHelper.moveIn, AnimationHelper.fallIn]

})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
