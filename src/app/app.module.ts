import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card-list/card.component';
import { DetailsComponent } from './components/card-details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarApiService } from './services/consultar-api.service';
import { SharedMaterialModule } from './shared/sharedmaterial.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    AuthModule
  ],
  providers: [ConsultarApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
