import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
  title: string = "List of food";
  foods = foods;
  myList: {name: string, calories: number, quantity: number, image: string}[] = [];
  quantity: number;
  totalCal: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFood(newFood){
    this.foods.unshift(newFood);
  }

  addToMyList(myFood, quantityInput){
    const existingFood = this.myList.find(item => item.name === myFood.name);
    const quantity = Number(quantityInput.value);
    if(existingFood){
      existingFood.quantity += quantity;
    } else {
      myFood.quantity = quantity;
      this.myList.push(myFood);
    }
    this.totalCal += (myFood.calories * quantity);
    this.quantity = 1;
  }

}
