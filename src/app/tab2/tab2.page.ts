import { Component } from '@angular/core';
import { WoooService } from 'src/Provider/woocomerce';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categories: any[];
  constructor(private wc:WoooService) {}

  ngOnInit() {
    this.wc.getCategory().subscribe((res: any[]) => {
     this.categories = res 
   });
   }

}
