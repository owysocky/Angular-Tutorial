import { Component } from "@angular/core";

@Component({
  selector: "not-found",
  template: `
    <div>
      Page not found
    </div>
    <div>
      <a routerLink="/">Go home</a>
    </div>
  `
})
export class NotFoundComponent {}
