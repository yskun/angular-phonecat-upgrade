import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { LocationSyncService } from '../location-sync.service';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent
  ],
  entryComponents: [AppComponent],
  imports: [
  BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [LocationSyncService],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule,private locationSync: LocationSyncService){}

  ngDoBootstrap(appRef: ApplicationRef) {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    appRef.bootstrap(AppComponent)
    this.locationSync.setUpLocationSync(this.upgrade)
  }
 }
