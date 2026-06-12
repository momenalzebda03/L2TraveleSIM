import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { TranslateModule } from '@ngx-translate/core';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { TitleComponent } from 'src-IOS/title/title.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    Tab4PageRoutingModule,
    TitleComponent
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
