import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AboutusPageRoutingModule } from './aboutus-routing.module';

import { AboutusPage } from './aboutus.page';
import { TitleComponent } from 'src-IOS/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    AboutusPageRoutingModule,
    TitleComponent
  ],
  declarations: [AboutusPage]
})
export class AboutusPageModule {}
