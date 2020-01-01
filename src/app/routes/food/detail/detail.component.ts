import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor() {}
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

  submit(value: any) {
    console.log(value);
  }
  ngOnInit() {}
}
