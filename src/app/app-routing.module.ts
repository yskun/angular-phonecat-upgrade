import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [{
  path: '**',
  component: EmptyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
