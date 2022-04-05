import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
message:any;

  constructor() { }

  ngOnInit(): void {
   
    }
  
  reciveMsg(val:any){
    this.message=val;
  }

}