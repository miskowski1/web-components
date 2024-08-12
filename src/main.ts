import { bootstrap } from '@angular-architects/module-federation-tools';
import { AppComponent } from './app/app.component';

bootstrap(AppComponent, {
  production: false,
  appType: 'microfrontend'
});
