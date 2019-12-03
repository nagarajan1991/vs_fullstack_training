import { Component } from '@angular/core';

@Component ({
    selector:'app-root',
    templateUrl:'./app.component.html'
    

})

export class AppComponent {
    title: string = "Hi This is variable";
    age: number = 10;
    isActive: boolean = true;
}