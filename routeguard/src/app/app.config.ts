import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthGuard } from './routeGuards/auth.guard';
import { AuthService } from './routeGuards/auth.service';
import { CanDeactivateGuard } from './routeGuards/can-deactivate.guard';
import { OrderResolverService } from './routeresolver/order-resolver.service';
import { OrderService } from './routeresolver/order.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    OrderResolverService,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    HttpClient, provideAnimationsAsync(),

  ]
};
