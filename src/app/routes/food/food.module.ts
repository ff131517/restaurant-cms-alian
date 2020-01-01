import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './list/list.component';
import { FoodEditComponent } from './list/view/view.component';
import { DetailComponent } from './detail/detail.component';

const COMPONENTS = [FoodListComponent];
const COMPONENTS_NOROUNT = [FoodEditComponent];

@NgModule({
  imports: [SharedModule, FoodRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, DetailComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class FoodModule {}
