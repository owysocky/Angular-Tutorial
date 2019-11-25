import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//Containers
import { PassengerDashboardComponent } from "./containers/passender-dashboard/passender-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//Components
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";
//Service
import { PassengerDashboardService } from "./passender-dashboard.service";

const routes: Routes = [
  {
    path: "passengers",
    children: [
      { path: "", component: PassengerDashboardComponent },
      { path: ":id", component: PassengerViewerComponent }
    ]
  }
];
@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
