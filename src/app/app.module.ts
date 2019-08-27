import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import { MaterialModule } from './material';

//components
import { ClientComponent } from './components/client/client.component';
import { NavigationToolbarComponent } from './components/navigation-toolbar/navigation-toolbar.component';
import { MonitorComponent } from './components/monitor/monitor.component';

//services
import { ClientService } from './services/client.service';
import { BackupComponent } from './components/backup/backup.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavigationToolbarComponent,
    MonitorComponent,
    BackupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
