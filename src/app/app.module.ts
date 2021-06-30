import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ElementsModule } from './elements/elements.module';
import { CollectionsModule} from './collections/collections.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
* line 13 to 16 we are importing the entire module directory as an import to allow components use it
*/

/*
we move AppRoutingModule to thte bottom because if we leave it to the top
wild card ** will be loading and reading as if all components are not found
*/
