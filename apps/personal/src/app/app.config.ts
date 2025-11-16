import {
  ApplicationConfig,
  importProvidersFrom,
  Inject,
  PLATFORM_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import {
  Translation,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
// import { HttpLoaderFactory } from './http-loader.factory'; // یک فایل ساده که تعریفش پایین میدم
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { isPlatformServer } from '@angular/common';

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  // if (isPlatformServer(this.platformId)) {
      // return this.http.get<AXTranslation>(`http://localhost:4000/assets/i18n/${options.lang}/${options.scope}.json`);
      return  new  TranslateHttpLoader(http,'http://localhost:4000/assets/i18n/', '.json');
    // } else {
      // return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
      // return this.http.get<AXTranslation>(`/assets/i18n/${options.lang}/${options.scope}.json`);
    // }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    importProvidersFrom([TranslateModule.forRoot(provideTranslation())])
  ],
};
