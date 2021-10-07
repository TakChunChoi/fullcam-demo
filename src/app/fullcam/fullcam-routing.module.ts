import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullcamComponent } from './fullcam.component';


const routes: Routes = [
  {
    path: '',
    component: FullcamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FullcamRoutingModule { }
