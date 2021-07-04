import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name: 'Julie',
      age: 34,
      job: 'Designer'
    },
    {
      name: 'Anna',
      age: 24,
      job: 'Lawyer'
    },
    {
      name: 'Mary',
      age: 18,
      job: 'Student'
    }
  ];

  headers = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    },
    {
      key: 'job',
      label: 'Job'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
