import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  person = [
    {
      'name': " shashank rao",
      'age': 24,
      'country': "USA"
    },
    {
      'name': "priya",
      'age': 24,
      'country': "PAKISTAN"
    },
    {
      'name': " nandan",
      'age': 23,
      'country': "IND"
    },
    {
      'name': " shashank rao",
      'age': 24,
      'country': "UK"
    },
  ];
  getColors(code:string)
  {
    switch(code){
      case 'IND':
        return 'green';
        break;
        case 'UK':
        return 'blue';
        break;
        case 'PAKISTAN':
        return 'red';
        break;
        default :
        return 'black';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
