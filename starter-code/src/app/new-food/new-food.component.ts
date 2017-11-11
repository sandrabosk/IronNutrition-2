import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewFoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  show: boolean = true;

  ngOnInit() {
    this.foods = foods;
  }

  submitForm(addFood){
    this.newFood ={
      name:addFood.newFoodName.value,
      calories: addFood.newFoodCalories.value,
      image: addFood.newFoodImage.value,
      quantity: 0
    }
    this.foods.push(this.newFood);
    this.show = true;
    addFood.reset();
  }

  showForm(){
    this.show = !this.show;
  }
  constructor() { }

}
