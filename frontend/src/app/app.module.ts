import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule} from'@angular/material/table';




import { MatInputModule,} from'@angular/material/input';

import { MatButtonModule,} from'@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }