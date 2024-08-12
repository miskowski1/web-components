import { createCustomElement } from '@angular/elements';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


(async () => {
  const app = createApplication({ providers: appConfig.providers });
  const element = createCustomElement(AppComponent, {
    injector: (await app).injector
  });

  customElements.define('test-element', element);
})();
