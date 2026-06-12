import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CompatibleDevicePageRoutingModule } from './compatible-device-routing.module';

import { CompatibleDevicePage } from './compatible-device.page';
import { TitleComponent } from 'src-IOS/title/title.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    CompatibleDevicePageRoutingModule,
    TitleComponent
  ],
  declarations: [CompatibleDevicePage]
})
export class CompatibleDevicePageModule {}
