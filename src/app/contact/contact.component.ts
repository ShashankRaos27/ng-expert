import { Component, Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
