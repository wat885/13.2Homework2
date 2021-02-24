import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.html',
  styleUrls: ['./to-do-list-component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() 
  task: string;

  arrayTask = ['Coffee','Breakfast'];

  constructor() { }

  addTask(){
      this.arrayTask.push(this.task)
      console.log(this.arrayTask)
  }
  deleteTask(x){
    // console.log(this.arrayTask.filter(item => item!=x))
    // this.arrayTask = this.arrayTask.filter(item => item!=x)
    // console.log(this.arrayTask)
    x = this.arrayTask.findIndex(item => item==x)
    console.log(x)  
    this.arrayTask.splice(x,1)
    console.log(this.arrayTask)  
  }

  ngOnInit(): void {
  }

}
