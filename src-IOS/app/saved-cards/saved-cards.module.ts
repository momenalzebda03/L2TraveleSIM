import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedCardsPageRoutingModule } from './saved-cards-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SavedCardsPage } from './saved-cards.page';
import { TitleComponent } from 'src-IOS/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    SavedCardsPageRoutingModule,
    TitleComponent
  ],
  declarations: [SavedCardsPage]
})
export class SavedCardsPageModule {}
