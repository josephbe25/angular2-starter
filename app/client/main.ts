import { bootstrap } from "angular2/platform/browser"
import { HeaderComponent } from "./header/header"
import { AppComponent } from "./app/app"
import {ROUTER_PROVIDERS} from 'angular2/router';

console.log("Initializing application");

document.addEventListener("DOMContentLoaded", () => {

  bootstrap(AppComponent, [ROUTER_PROVIDERS]);

});
