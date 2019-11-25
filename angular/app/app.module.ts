import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassengerDashboardModule } from "./passenger-dashboard/passender-dashboard.module";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./notfound.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

// const routes: Routes = [
//   {
//     path: "",
//     redirectTo: "passengers",
//     pathMatch: "full"
//   },
//   { path: "**", component: NotFoundComponent }
// ];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule {}
