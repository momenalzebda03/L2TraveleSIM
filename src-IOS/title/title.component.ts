import { Component, OnInit, Input } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule]
})
export class TitleComponent implements OnInit {

  @Input() title: string = '';

  constructor(private navController: NavController) { }

  ngOnInit() { }

  gotoBack(): void {
    this.navController.pop();
  }
}