import { Component, OnInit } from "angular2/core";
import { EventService } from "../services/eventService";
import {RouteParams, Router} from 'angular2/router';
import { Event } from "../domain/event";

@Component({
    directives: [],
    template: `
        <div *ngIf="event">
            <h2>
                Event Details:
            </h2>
            <div>
                <div>
                    Id: {{event.id}}
                </div>
                <div>
                    Name: {{event.name}}
                </div>
                <div>
                    Name: {{event.location}}
                </div>
                <div>
                    Name: {{event.price}}
                </div>
            </div>
            <div>
                <button (click)="goBack()">Go Back</button>
            </div>
        </div>
    `
})
export class EventComponent{
    event: Event;

    constructor(private routeParams: RouteParams,
                private router: Router,
                private eventService: EventService){
    }

    ngOnInit() {
        let id = this.routeParams.get('id');

        if (id){
            this.event = this.eventService.getEvent(+id);
        }
    }

    goBack(){
        this.router.navigate(['/Events']);
        //this.router.navigate(['../DefaultEvent']);
    }
}