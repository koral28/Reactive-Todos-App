import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ListsComponent } from './components/lists/lists.component'
import { ListDetailsComponent } from './components/list-details/list-details.component'
import { ListEditComponent } from './components/list-edit/list-edit.component'
import { ItemsComponent } from './components/items/items.component'
import { IllegalPathComponent } from './components/illegal-path/illegal-path.component'
import { DisplayListGuard } from './guards/display-list.guard'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'lists',
    component: ListsComponent,
    canActivate: [DisplayListGuard],
  },
  { path: 'lists/:id', component: ListDetailsComponent },
  { path: 'lists/:id/edit', component: ListEditComponent },
  { path: 'items', component: ItemsComponent },
  { path: '**', component: IllegalPathComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
