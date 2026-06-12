import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsConditionsPageRoutingModule } from './terms-conditions-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TermsConditionsPage } from './terms-conditions.page';
import { TitleComponent } from '../title/title.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    TermsConditionsPageRoutingModule,
    TitleComponent
  ],
  declarations: [TermsConditionsPage]
})
export class TermsConditionsPageModule {}
