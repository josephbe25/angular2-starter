import { Component } from "angular2/core";
import { HeaderComponent } from "../header/header";
import { RouteConfig, RouterOutlet, RouterLink, RouteParams, Router } from "angular2/router";
import { MainComponent } from "../app/main";
import { ContactComponent } from "../app/contact";
import { EventsComponent } from "./events";
import { EventService } from "../services/eventService";

@Component({
  selector: 'app',
  directives: [HeaderComponent, RouterLink, RouterOutlet],
  providers: [EventService],
  template: `
    <custom-header></custom-header>
    <div id="nav-bar">
        <a [routerLink]="['Main']">Main Page</a>
        <a [routerLink]="['Events']">Events</a>
        <a [routerLink]="['Contact']">Contact Us</a>
        <span> <=== Nav Bar</span>
    </div>

    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    { path: '/', name: 'Main', component: MainComponent, useAsDefault: true},
    { path: '/events/...', name: 'Events', component: EventsComponent},
    { path: '/contact', name: 'Contact', component: ContactComponent}
])
export class AppComponent{

    constructor(public router: Router){
        //TODO - Figure out why it won't let me provide RouteParams via a ctor param
    }

    ngOnInit() {
        /*let redirectUrl = this.routeParams.get('redirectUrl');
        if (redirectUrl == "events"){
            //this.router.navigate(['Events']);
        }
        else if (redirectUrl == "contact"){
            //this.router.navigate(['Contact']);
        }*/
    }
}