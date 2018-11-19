import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { TriangleTypeComponent } from './components/triangle-type/triangle-type.component';
import { TriangleCalculationService } from './services/triangle-calculation.service';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent, TriangleTypeComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [TriangleCalculationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
