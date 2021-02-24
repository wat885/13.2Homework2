import { Component } from'@angular/core';

@Component({
    selector:'app-count',
    templateUrl:'./counting.component.html',
    styleUrls: ['./counting.component.css'],
})

export class CountingComponent {
    count = 0
    constructor() {}

    countNumber(){
        this.count= this.count+1
    }
}