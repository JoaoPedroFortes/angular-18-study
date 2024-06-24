import { AppFruitComponent } from './components/app-fruit/app-fruit.component';
import { Fruit } from './model/fruit.model';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppButtonComponent } from './directives/app-button/app-button.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppButtonComponent, CommonModule, AppFruitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-18-study';

  isConfirmed: boolean = false;

  fruitList: Fruit[] = [{
    name: 'Banana',
    quantity: 10
  }];

  constructor() {

  }

  ngOnInit(): void {

  }


  onCancel() {
    this.isConfirmed = false;
  }

  onConfirm() {
    this.isConfirmed = true;
  }

  addFruit(fruit: Fruit) {
    this.fruitList.push(fruit);
  }

  removeFruit(index: number) {
    this.fruitList.splice(index, 1);
  }

}
