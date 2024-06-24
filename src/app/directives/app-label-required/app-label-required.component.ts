import { ChangeDetectorRef, Component, Input, OnInit, ViewRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
@Component({
  selector: 'label[app-label-required]',
  standalone: true,
  imports: [], 
  host: {
    
  },
  template: `<ng-content/> @if(isRequired){<span class="required">* </span> }`,
  styleUrl: './app-label-required.component.scss'
})
export class AppLabelRequiredComponent implements OnInit{

  public isRequired: boolean = false;

  @Input() 
  labelFor: NgModel | undefined = undefined;

  public valueChangesSubscription: Subscription | undefined  = undefined;

  constructor(public cdRef: ChangeDetectorRef) { }

  ngOnChanges() {
      this.unsubscribeAll();
      if (this.labelFor != undefined) {
          this.valueChangesSubscription = this.labelFor?.valueChanges?.subscribe(data => {
              let isRequired = false;
              if (this.labelFor && this.labelFor.errors) {
                  Object.keys(this.labelFor.errors).forEach(keyError => {
                      if (keyError == 'required' && this.labelFor?.errors && this.labelFor?.errors[keyError] === true) {
                          isRequired = true;
                      }
                  });
              }
              this.isRequired = isRequired;
          });
      }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
      this.unsubscribeAll();
  }

  unsubscribeAll() {
      if (this.valueChangesSubscription != undefined) {
          this.valueChangesSubscription.unsubscribe();
      }
  }

}