import { Component, OnInit } from "angular2/core";
import { EventService } from "../services/eventService";
import { Event } from "../domain/event";
import { RouteConfig, RouterOutlet, RouterLink } from "angular2/router";
import { EventComponent } from "./event";

@Component({
    directives: [RouterOutlet, RouterLink],
    //providers: [ROUTER_PROVIDERS, EventService],
    providers: [EventService],
    template: `
        <h2>
            Events:
        </h2>
        <div *ngFor="#event of events">
            Id: {{event.id}} -
            Name: {{event.name}} -
            Location: {{event.location}} -
            Price: {{event.price}} -
            <a [routerLink]="['Event', {id: event.id, bogusStuff: 'Here', moreBogus: 'ha'}]">View Details</a>
        </div>

        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/', name: 'DefaultEvent', component: EventComponent, useAsDefault: true},
    { path: '/:id', name: 'Event', component: EventComponent}
])
export class EventsComponent{
    events: Event[];

    constructor(private eventService: EventService){
    }

    //Notice how this service method call is not called in the constructor of the component
    //This is done so it does not block the application init sequence
    //Only basic class setup operations should be called in the constructor
    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}