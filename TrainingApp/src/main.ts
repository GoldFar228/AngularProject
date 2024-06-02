import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GlobalErrorHandler } from './app/services/global-error-handler.service';
import { ErrorHandler } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
  .catch((err) => console.error(err));