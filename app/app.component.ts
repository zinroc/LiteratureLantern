import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    template: `
		<h1>{{name}}</h1>
		<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a>
		<router-outlet></router-outlet>
	`,

})
export class AppComponent {
    name: string = "Literature Lanturn";

    constructor() {}
}
