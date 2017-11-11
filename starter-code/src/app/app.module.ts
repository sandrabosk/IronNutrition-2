import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NewFoodComponent } from './new-food/new-food.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FilterPipe,
    NewFoodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
