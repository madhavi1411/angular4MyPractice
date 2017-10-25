import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './components/likes/likes.component';
import { PowerPipe } from './pipes/power.pipe';
import { DataService, DataServiceBase } from './services/data.service';

@NgModule({
  imports: [
    CommonModule //required for ngIf, ngSwitch --- BrowserModule extends CommonModule
  ],
  declarations: [LikesComponent, PowerPipe],

  //export a component that can be used in another module
  exports: [
    LikesComponent,
    PowerPipe
  ],
  providers: [
    // DataService

    //to achive polymorphism use the currly braces approach
    {
      provide: DataServiceBase,
      useClass: DataService  //angular creates object for this class

    }
  ]
})
export class SharedModule { }
