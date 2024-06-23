import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppButtonComponent } from './app-button/app-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-18-study';


  constructor(){

  }
  ngOnInit(): void {
    console.log('onInit')
  }


  onConfirm(){
    console.log('onConfirm')
  }


}
