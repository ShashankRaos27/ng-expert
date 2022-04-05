import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list-parent',
  templateUrl: './job-list-parent.component.html',
  styleUrls: ['./job-list-parent.component.css']
})
export class JobListParentComponent implements OnInit {
  comname="thbs";
  city="bangalore";
  code=577205;
  recv:any;

  constructor() { }

  ngOnInit(): void {
  }
  data_recv(val:any)
  {
    this.recv=val;
  }
}
