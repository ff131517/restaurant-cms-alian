import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { FoodEditComponent } from './view/view.component';
import { Food, FoodService } from '../food.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Response<T> {
  data: T;
}
@Component({
  selector: 'app-sys-log',
  templateUrl: './list.component.html',
})
export class FoodListComponent implements OnInit {
  constructor(
    private modal: ModalHelper,
    private router: Router,
    private foodService: FoodService,
    private http: HttpClient,
  ) {}

  foodList: Food[] = [];
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: 'id', index: 'id' },
    { title: '菜品名称', index: 'name' },
    { title: '价格', type: 'number', index: 'price' },
    { title: '图片', type: 'img', index: 'imgUrl' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        {
          text: '编辑',
          click: (item: any) => {
            this.router.navigateByUrl(`/food/detail/${item.id}`);
          },
        },
        // { text: '查看', type: 'static', component: FormEditComponent, click: 'reload' },
      ],
    },
  ];

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.foodService.getFoodList().subscribe(rsp => {
      this.foodList = rsp.data;
    });
  }
  add() {
    this.modal.createStatic(FoodEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }
}
