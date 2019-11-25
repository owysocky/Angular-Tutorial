import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassengerDashboardModule } from "./passenger-dashboard/passender-dashboard.module";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
    HttpModule
  ]
})
export class AppModule {}
