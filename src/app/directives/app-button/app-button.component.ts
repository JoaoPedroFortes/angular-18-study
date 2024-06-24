import { Component, Input } from '@angular/core';

type FactoryKey = 'success' | 'warning' | 'danger';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [], 
  host: {
    '[class.success]': 'success',
    '[class.warning]': 'warning',
    '[class.danger]': 'danger',
  },
  template: `<ng-content/>
  `,
  styleUrl: './app-button.component.scss'
})
export class AppButtonComponent {

  public success: boolean = false;
  public warning: boolean = false;
  public danger: boolean = false;

  @Input()
  set accent(value:FactoryKey){
      const factory = {
        ['success']: ()=>{this.success = true},
        ['warning']: ()=>{this.warning = true},
        ['danger']: ()=>{this.danger = true},
      }

      factory[value] && factory[value]();
  }


}