import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class WoooService {
  private  apiHost:string='https://multigiftkart.in/wp-json/wc/v3/';
   private  ConsumerKey: string='ck_f88e0d7e138e8f81560fae61ddae51e3b5c1e697';
   private  ConsumerSecret :string='cs_d32ab68ebc42a671646de86dc4932803292d7d8f';
	constructor(private _http: HttpClient) {}
     /**
	 * This gets all the milestones data from JSON
	 * @returns {MilestoneInterface[]} Returns array of milestone data.
	 */
	//this.apiHost+this.apiHost+`products/categories?consumer_key=${this.ConsumerKey}&consumer_secret=${this.ConsumerSecret}`
	public getProduct():Observable<any> {
		const url = this.apiHost+`products?consumer_key=${this.ConsumerKey}&consumer_secret=${this.ConsumerSecret}`;
		return this._http.get<any>(url);
	}
}
