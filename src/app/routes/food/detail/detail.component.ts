import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { Food, FoodService } from '../food.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private foodService: FoodService, private message: NzMessageService) {}
  schema: SFSchema = {
    required: ['name', 'desc', 'imgUrl', 'price', 'type'],

    properties: {
      name: {
        type: 'string',
        title: '菜品名称',
        maxLength: 10,
      },
      desc: {
        type: 'string',
        title: '描述',
        maxLength: 255,
      },
      imgUrl: {
        type: 'string',
        title: '图片地址',
        maxLength: 255,
      },
      price: {
        type: 'number',
        title: '价格',
        minLength: 10,
      },
      type: {
        type: 'number',
        title: '类型',
        minLength: 10,
      },
    },
  };

  submit(value: Food) {
    this.foodService.insertFood(value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.message.success(res.message);
      }
    });
  }
  ngOnInit() {}
}
