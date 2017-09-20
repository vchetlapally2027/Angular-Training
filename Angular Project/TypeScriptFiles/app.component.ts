import {Component} from "@angular/core"

@Component({
    selector:"my-custom-tag",
    //template:"<h1>Hello World.</h1> This is Angular JS"
    templateUrl:"./app.component.html"
})
export class AppComponent{
Name:string;
    Salary:number;
    /**
     *
     */
    constructor() {
        this.Name="Venkatesh",
        this.Salary=500

    }
    Increment():void{
        this.Salary = this.Salary + 50;
    }
}