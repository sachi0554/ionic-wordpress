import { Component } from '@angular/core';
import { WoooService } from 'src/Provider/woocomerce';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: any[];
  constructor(private wc:WoooService) {}

  ngOnInit() {
   this.wc.getProduct().subscribe((res: any[]) => {
    this.products = res 
  });
  }
}