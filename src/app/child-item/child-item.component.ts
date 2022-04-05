import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {
  @Output() message=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    this.message.emit(
      {
        course_Name:'mean',
        Startdate: '12/12/2021'
      }
    );
   
  }

}
