import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class BlogListComponent implements OnInit {

  htmlblog: SafeHtml;
  constructor(
    protected _sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.htmlblog = this._sanitizer.sanitize(SecurityContext.HTML,
    `
      <a href="https://lerigo.art.br" target="_blank">
          <img  class="ql-video ql-align-center"
            src="http://g3labweb.appspot.com/images/600x300.gif"
            style="max-width: 600px;">
      </a>
      </br>
      <p class="ql-align-center"><span class="ql-size-huge">Teste Blog</span></p><p class="ql-align-center"><br></p><p class="ql-align-justify"><span class="ql-size-large"> Aqui será escrito o blog do lerigo</span></p><p class="ql-align-justify"><span class="ql-size-large">Muit bacana</span></p><p class="ql-align-justify"><span class="ql-size-large">Ta ficando massa de mais</span></p><ol><li class="ql-align-justify"><span class="ql-size-large">adsadasd</span></li><li class="ql-align-justify"><span class="ql-size-large">safdsfsf</span></li></ol><ul><li class="ql-align-justify"><span class="ql-size-large">sdfsdfgse</span></li><li class="ql-align-justify"><span class="ql-size-large">sdfsd</span></li></ul><p class="ql-align-justify"><br></p><p class="ql-align-justify"><br></p>
    `);
  }

}
