import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector/selector.component';
import { InputFieldComponent } from './components/input-field/input-field.component';



@NgModule({
  declarations: [
    SelectorComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
