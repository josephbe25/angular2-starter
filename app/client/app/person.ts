import Immutable = require('immutable');

const PersonRecord = Immutable.Record({name: ""});

export class Person extends PersonRecord{
    name: string;

    constructor(props){
        super(props);
    }
}