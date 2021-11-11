import { Injectable } from '@angular/core';
import { Diamond } from './diamond.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiamondsDataService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:29814/api/Diamonds'

  diamond: Diamond = new Diamond();
  diamondsList: Diamond[] = [];

  averagePrice: number = 0;
  numberOfDiamonds: number = 0;
  averageDiscount: number = 0;

  addDiamond() {
    this.http.put(this.baseURL, this.diamond).toPromise()
      .then(
        res => {
          debugger;
          this.diamondsList[this.diamondsList.length] = this.diamond;
          this.diamond = new Diamond();
          this.calcStatistics();
        },
        err => { console.log() }
      );
    debugger;

  }

  getDiamondsList() {
    this.http.get(this.baseURL).toPromise()
      .then(
        res => {
          debugger;
          this.diamondsList = res as Diamond[];
          this.calcStatistics();
        },
        err => { console.log() }
      )
  }

  calcStatistics() {
    for (let index = 0; index < this.diamondsList.length; index++) {
      this.averagePrice = this.averagePrice.valueOf() + this.diamondsList[index].price.valueOf();
      let help=(this.diamondsList[index].listPrice.valueOf() - this.diamondsList[index].price.valueOf());
      this.averageDiscount = this.averagePrice.valueOf() + help;
    }
    this.numberOfDiamonds = this.diamondsList.length;
    this.averagePrice = this.averagePrice / this.numberOfDiamonds;
    this.averageDiscount = this.averageDiscount / this.numberOfDiamonds;//calculate the average difference between the list price and the price
    this.averageDiscount=parseFloat(this.averageDiscount.toFixed(2)); 
    this.averagePrice=parseFloat(this.averagePrice.toFixed(2)); 
  }

}
