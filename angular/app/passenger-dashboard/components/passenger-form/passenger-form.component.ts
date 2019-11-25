import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <div>
      {{ detail | json }}
      <form
        (ngSubmit)="handleSubmit(form.value, form.valid)"
        #form="ngForm"
        novalidate
      >
        <div>
          Passenger name:
          <input
            type="text"
            name="fullname"
            [ngModel]="detail?.fullname"
            #fullname="ngModel"
            required
          />
        </div>
        <div>
          Passenger ID:
          <input
            type="number"
            name="id"
            [ngModel]="detail?.id"
            #id="ngModel"
            required
          />
        </div>
        <div>
          Checked In
          <label>
            <input
              type="checkbox"
              name="checkedIn"
              [value]="true"
              [ngModel]="detail?.checkedIn"
              (ngModelChange)="toggleCheckIn($event)"
          /></label>
        </div>
        <div *ngIf="form.value.checkedIn">
          Check in date:
          <input
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"
          />
        </div>
        <div>
          Baggage:
          <select name="baggage" [ngModel]="detail?.baggage">
            <option *ngFor="let item of baggage" [ngValue]="item.key">
              {{ item.value }}
            </option></select
          >
        </div>
        <button type="submit" [disabled]="form.invalid">
          Update passenger
        </button>
      </form>
    </div>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: "none",
      value: "No baggage"
    },
    {
      key: "hand",
      value: "Hand baggage"
    },
    {
      key: "hold",
      value: "Hold baggage"
    }
  ];
  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}

// RADIO BUTTON
// <label>
//   <input
//     type="radio"
//     name="checkedIn"
//     [value]="true"
//     [ngModel]="detail?.checkedIn"
//     (ngModelChange)="toggleCheckIn($event)"
//   />Yes</label
// >
// <label>
//   <input
//     type="radio"
//     name="checkedIn"
//     [value]="false"
//     [ngModel]="detail?.checkedIn"
//     (ngModelChange)="toggleCheckIn($event)"
//   />No</label
// >
