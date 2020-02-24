import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TriggerComponent } from "./trigger/trigger.component";
import { FooterComponent } from "./footer/footer.component";
import { ConfigurationComponent } from "./config/configuration/configuration.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from './http.service';
import { ProdItemComponent } from './prod-item/prod-item.component';
import { FilterComponent } from './config/filter/filter.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    TriggerComponent,
    FooterComponent,
    ConfigurationComponent,
    ProdItemComponent,
    FilterComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpService]
})
export class AppModule {}
