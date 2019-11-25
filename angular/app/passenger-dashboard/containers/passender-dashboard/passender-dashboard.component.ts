import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Router } from "@angular/router";
import { PassengerDashboardService } from "../../passender-dashboard.service";

@Component({
  selector: "passender-dashboard",
  styleUrls: ["passender-dashboard.components.scss"],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <passenger-count [items]="passengers"> </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (view)="handleView($event)"
        (edit)="handleEdit($event)"
      ></passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => (this.passengers = data));
  }

  handleView(event: Passenger) {
    this.router.navigate(["/passengers/", event.id]);
    // this.router.navigate([`${"/passengers/"}${event.id}`]);
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .deletePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
}
