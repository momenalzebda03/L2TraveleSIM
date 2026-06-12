import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FaqPageRoutingModule } from './faq-routing.module';

import { FaqPage } from './faq.page';
import { TitleComponent } from '../title/title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FaqPageRoutingModule,
    TitleComponent
  ],
  declarations: [FaqPage]
})
export class FaqPageModule {}
