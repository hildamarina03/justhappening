import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  id: string;
  classes = {'imp': true, 'yellow': true}

  //DEFINE SOME TASKS
  tasks=[
    {
      id: 1,
      name: "Study Angular2",
      date: new Date(2016, 12, 20),
      priority: "imp",
      highlight: "blue"
    },

    {id:2,
      name:"Study Java",
      date: new Date(2016, 12, 22),
      priority: "none",
      highlight: "yellow"
    },

  ];

  constructor(private route: ActivatedRoute) {
    this.id=route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}