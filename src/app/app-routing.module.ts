import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { MonitorComponent } from './components/monitor/monitor.component';
import { BackupComponent } from './components/backup/backup.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'backup', component: BackupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
