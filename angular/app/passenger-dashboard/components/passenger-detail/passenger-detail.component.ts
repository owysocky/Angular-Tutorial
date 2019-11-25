import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span
        class="status"
        [ngClass]="{ 'checked-in': detail.checkedIn }"
      ></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: "yMMMMd")
            : "Not checked in"
        }}
      </div>
      <div class="children">Baggage: {{ detail.baggage.value }}</div>
      <button (click)="toggleEdit()">{{ editing ? "Done" : "Edit" }}</button>
      <button (click)="onRemove()">Remove</button>
      <button (click)="goToPassanger()">View</button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();
  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();
  @Output()
  view: EventEmitter<Passenger> = new EventEmitter();

  editing: boolean = false;
  constructor() {}
  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
  goToPassanger() {
    this.view.emit(this.detail);
  }
}
