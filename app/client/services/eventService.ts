import {Injectable} from 'angular2/core';
import { Event } from "../domain/event";

@Injectable()
export class EventService {
    private events: Event[];

    constructor(){
        this.events = this.createEvents();
    }

    getEvents(){
        //For right now this returns mock data, but would generally be a GET request
        return this.events;
    }

    getEvent(id: number){
        //For right now this returns mock data, but would generally be a GET request
        return this.events.filter(x => x.id == id)[0];
    }

    private createEvents(){
        let firstEvent = new Event();
        firstEvent.id = 1;
        firstEvent.name = 'Jimmy Buffet Concert';
        firstEvent.location = 'Orlando, Florida';
        firstEvent.price = 40;

        let secondEvent = new Event();
        secondEvent.id = 2;
        secondEvent.name = 'Angular 2 Conference';
        secondEvent.location = 'Atlanta, Georgia';
        secondEvent.price = 20;

        let thirdEvent = new Event();
        thirdEvent.id = 3;
        thirdEvent.name = 'Board Game Geeks Meetup';
        thirdEvent.location = 'Chicago, Illinois';
        thirdEvent.price = 2;

        return [firstEvent, secondEvent, thirdEvent];
    }
}