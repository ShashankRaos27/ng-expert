import { Component,  EventEmitter,  Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job-child',
  templateUrl: './job-child.component.html',
  styleUrls: ['./job-child.component.css']
})
export class JobChildComponent implements OnInit {
@Output() sending =new EventEmitter();
@Input() companyName:any;
@Input() area:any;
@Input() pincode:any;
  constructor() { }

  ngOnInit(): void {
    this.sending.emit({
      empName:'shashank',
      emp:6646
    });
  }

}
