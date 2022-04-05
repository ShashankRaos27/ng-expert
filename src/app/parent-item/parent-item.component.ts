import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-item',
  templateUrl: './parent-item.component.html',
  styleUrls: ['./parent-item.component.css']
})
export class ParentItemComponent implements OnInit {
  message:any;
  constructor() { }

  ngOnInit(): void {
  }
  reciveMsg(val:any){
    this.message=val;
  }
}
