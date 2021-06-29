import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'

//form
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//components
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { ListsComponent } from './components/lists/lists.component'
import { ItemsComponent } from './components/items/items.component'
import { ListDetailsComponent } from './components/list-details/list-details.component'
import { ListEditComponent } from './components/list-edit/list-edit.component'
import { IllegalPathComponent } from './components/illegal-path/illegal-path.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    ItemsComponent,
    ListDetailsComponent,
    ListEditComponent,
    IllegalPathComponent,
  ],
  imports: [
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
