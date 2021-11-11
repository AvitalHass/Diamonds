import { Component, OnInit } from '@angular/core';
import { DiamondsDataService } from '../shared/diamonds-data.service';
import { CommonModule } from "@angular/common";
import { Diamond } from '../shared/diamond.model';

@Component({
  selector: 'app-diamonds-list',
  templateUrl: './diamonds-list.component.html',
  styles: [
  ]
})
export class DiamondsListComponent implements OnInit {

  constructor(public service:DiamondsDataService) { }

  ngOnInit(): void {
    this.service.getDiamondsList();
    
  }

}
