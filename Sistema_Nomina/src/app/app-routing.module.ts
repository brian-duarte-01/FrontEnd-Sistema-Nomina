import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentIndexComponent } from './Controllers/Component-Index/component-index/component-index.component';


const routes: Routes = [
  {path:'Index', component: ComponentIndexComponent},
  {path: '', redirectTo: 'Index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
