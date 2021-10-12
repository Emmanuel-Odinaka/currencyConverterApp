import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FomanticUIModule } from 'ngx-fomantic-ui';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrenciesService } from './services/currencies.service';


import { AppComponent } from './app.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, FeatureComponent],
  imports: [
    BrowserModule,
    FomanticUIModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
