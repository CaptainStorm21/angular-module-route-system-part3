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
      job: 'Designer',
      employed: true,
    },
    {
      name: 'Anna',
      age: 24,
      job: 'Lawyer',
      employed: true,
    },
    {
      name: 'Mary',
      age: 18,
      job: 'Student',
      employed: true,
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
    {
      key: 'employed',
      label: 'Has a Job?!'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
