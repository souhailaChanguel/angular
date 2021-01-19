import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InscriptionDisabledDirectiveDirective } from './inscription-disabled-directive.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import{DashboardModule} from'../app/dashboard/dashboard.module';
import{FormateursModule} from'../app/formateurs/formateurs.module';
import{ParticipantsModule} from'../app/participants/participants.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { enableProdMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    InscriptionDisabledDirectiveDirective,
    PageNotFoundComponent,
    SideBarComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminModule,
    AppRoutingModule,
    DashboardModule,
    FormateursModule,
    ParticipantsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
