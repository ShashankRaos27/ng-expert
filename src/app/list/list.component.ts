import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  itemList = [
    {
      title: 'fruits',
      content: 'fruits are healthy',
      btnText: 'Buy fruits',
      link: 'https://google.com',
      imageLink: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    },
    {
      title: 'mobile',
      content: 'mobiles are unhealthy',
      btnText: 'Buy mobile & get 50% offer',
      link: 'https://apple.com',
      imageLink: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    },
    {
      title: 'Apples',
      content: 'All kinds of apple with 100%, organice farm',
      btnText: 'Buy  Apples',
      link: 'https://furits.com',
      imageLink: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
