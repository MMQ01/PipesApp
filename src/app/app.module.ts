import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations'

//CAMBIAR EL LOCALE DE LA APP
import localeEs from '@angular/common/locales/es-CO'
import localeFr from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeEs)
registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
