import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullcamComponent } from './fullcam.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FullcamRoutingModule } from './fullcam-routing.module';



@NgModule({
  declarations: [    FullcamComponent,
    SidebarComponent
],
  imports: [
    CommonModule,
    FullcamRoutingModule
  ],
})
export class FullcamModule { }
