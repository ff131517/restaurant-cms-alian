import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Food {
  id: number;
  name: string;
  imgUrl: string;
  desc: string;
  price: number;
  type: number;
}
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  insertFood(param: Food) {
    return this.http.post('/food/insert', param);
  }
}
