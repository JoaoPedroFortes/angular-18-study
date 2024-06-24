import { Fruit } from './../../model/fruit.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppLabelRequiredComponent } from '../../directives/app-label-required/app-label-required.component';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [FormsModule, AppLabelRequiredComponent],
  templateUrl: './app-fruit.component.html',
  styleUrl: './app-fruit.component.scss'
})
export class AppFruitComponent {
  
  object: Fruit = {};

  @Output()
  onAddFruit: EventEmitter<Fruit> = new EventEmitter();


  addFruit(){
    this.onAddFruit.emit(this.object);
    this.resetObject();
  }

  resetObject() {
    this.object = {};
  }
  

}

