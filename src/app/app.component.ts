import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translateSvc: TranslateService,
    private primengConfig: PrimeNGConfig
  ) {
    this.translateSvc.addLangs(['en-us', 'pt-br']);
    this.translateSvc.setDefaultLang('pt-br');
    this.translateSvc.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
    this.translateSvc.use(this.translateSvc.getBrowserCultureLang().toLowerCase());
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
