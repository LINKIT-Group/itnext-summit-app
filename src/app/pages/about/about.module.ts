import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage],
  bootstrap: [AboutPage],
})
export class AboutModule {}
