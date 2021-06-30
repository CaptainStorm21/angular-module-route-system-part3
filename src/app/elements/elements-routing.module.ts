import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  {
    path: 'elements',
    component: ElementsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }

/*
line 7 and 8
any time a user goes to /elements, load elements component
http://localhost:
*/
