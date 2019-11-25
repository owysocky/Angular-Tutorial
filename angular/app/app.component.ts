import { Component } from "@angular/core";
interface Navigation {
  link: string;
  name: string;
  exact: boolean;
}
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }"
        >
          {{ item.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Navigation[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "**",
      name: "oops",
      exact: false
    }
  ];
}
