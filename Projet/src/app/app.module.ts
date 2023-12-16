
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { EvennementFormComponent } from './evennement-form/evennement-form.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { EditEvennnementComponent } from './edit-evennnement/edit-evennnement.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderfrontComponent } from './components/headerfront/headerfront.component';
import { EvennementCardComponent } from './evennement-card/evennement-card.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FooterfrontComponent } from './components/footerfront/footerfront.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EvennementFormComponent,
    AuthentificationComponent,
    EditEvennnementComponent,
    FrontOfficeComponent,
    CreateAccountComponent,
    HeaderfrontComponent,
    EvennementCardComponent,
    AboutusComponent,
    EventDetailsComponent,
    FooterfrontComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,

    //MDBBootstrapModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
