import { Component, OnInit } from '@angular/core';
import { DiamondsDataService } from '../shared/diamonds-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styles: [
  ]
})
export class StatisticsComponent implements OnInit {

  constructor(public service:DiamondsDataService) { }

  averagePrice:Number=0;
  numberOfDiamonds:Number=0;
  averageDiscount:Number=0;

  ngOnInit(): void {
    this.service.getDiamondsList();
    
  }
}
