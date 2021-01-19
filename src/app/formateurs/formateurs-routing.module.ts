import { NgModule } from '@angular/core';
import { FormateursComponent } from './formateurs/formateurs.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: FormateursComponent
  }
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateursRoutingModule { }
