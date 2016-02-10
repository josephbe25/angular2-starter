import { Component, Input, Output, EventEmitter } from "angular2/core"
import { FORM_DIRECTIVES } from "angular2/common"
import { Person } from "../app/person"

@Component({
    selector: 'person-input',
    directives: [FORM_DIRECTIVES],
    template: `
        <input type="text" [ngModel]="person.name" (ngModelChange)="changePersonsName($event)" />
    `
})
export class PersonInput{
    @Input() person: any;
    @Output() changePerson = new EventEmitter();

    constructor(){
    }

    sayHi(){
        console.log(this.person.name + " says hi!");
    }

    changePersonsName(name: string){
        this.changePersonInternal(this.person.withMutations((p) => {p.name = name}));
    }

    private changePersonInternal(person: any){
        this.changePerson.emit(person);
    }

    /*DO NOT DO THIS: It breaks the one way data flow! Emit the change event up instead
    changePersonsName(name: string){
        this.person.name = name;
    }*/

}