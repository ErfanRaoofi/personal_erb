import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject, Optional, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterModule, TranslateModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TranslateService],
})
export class AppComponent {
  title = 'personal';

  public translate = inject(TranslateService);
  // public doc =inject(Document)

  a = signal('');

  constructor(@Optional() @Inject(DOCUMENT) private document: Document) {
    // this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'fa']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|fa/) ? browserLang : 'en');
    this.translate.get('HELLO', { value: 'world' }).subscribe((res: string) => {
      console.log(res); // 'HELLO world'
      this.a.set(res);
    });
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.document.body.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    this.document.documentElement.setAttribute('lang', lang);
  }
}
