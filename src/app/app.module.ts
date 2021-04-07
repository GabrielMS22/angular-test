import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './src/Components/order/order.component';
import { HomeComponent } from './src/Components/home/home.component';
import { FooterComponent } from './src/Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { WeightPipe } from './src/Pipes/weightPipe/weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    HomeComponent,
    FooterComponent,
    WeightPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
