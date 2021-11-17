import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightshomepageComponent } from './flightshomepage/flightshomepage.component';

const routes: Routes = [{
  path:'',
  component:FlightshomepageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
