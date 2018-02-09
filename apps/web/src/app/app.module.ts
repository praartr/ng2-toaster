import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
//app

import { CoreModule } from './modules/core/core.module';
import { MatDialogModule } from '@angular/material';
import { SampleModal } from 'apps/web/src/app/sample-modal.component';
@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), CoreModule, MatDialogModule, BrowserAnimationsModule, ToastModule.forRoot()],
  declarations: [AppComponent, SampleModal],
  entryComponents: [SampleModal],
  bootstrap: [AppComponent]
})
export class AppModule {}
