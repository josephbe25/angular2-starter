import { Component } from "angular2/core"
import { FORM_DIRECTIVES } from "angular2/common"
import { HeaderComponent } from "../header/header"
import { PersonInput } from "../app/personInput"
import { Person } from "../app/person"
import { ReduxStore } from "../app/reduxStore"

@Component({
  selector: 'app',
  directives: [HeaderComponent, PersonInput, FORM_DIRECTIVES],
  template: `
    <custom-header></custom-header>
    <div>
       Hello, My name is {{person.name}}
    </div>
    <div [textContent]="'You can also write explicit prop binding: Hello my name is ' + person.name"></div>
    <person-input [person]="person" (changePerson)="changePerson($event)" #personInput></person-input>
    <button (click)="personInput.sayHi()">Say hello {{person.name}}</button>
  `
})
export class AppComponent{
    person: any;

    constructor(){
        this.person = new Person({
            name: 'Joe'
        });

        ReduxStore.subscribe(() => {
                console.log('Action Dispatched, Current State:' + ReduxStore.getState());
            }
        );
    }

    changePerson(person: any) {
        this.person = person;
        console.log("Person changed: " + this.person);
        ReduxStore.dispatch({type: 'CHANGE_PERSON', person: person});
    }
}