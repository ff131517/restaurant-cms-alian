import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Response<T> {
  data: T;
}
export class Food {
  id = 0;
  name = '';
  imgUrl = '';
  desc = '';
  price = 0;
  type = 0;
}
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  insertFood(param: Food) {
    return this.http.post('/food/insert', param);
  }
  getFoodList() {
    return this.http.get<Response<Food[]>>('/food/getList');
  }
  getFoodDetail(id: number) {
    return this.http.get<Response<Food>>(`/food/getDetail`, { params: { id: id + '' } });
  }
}
