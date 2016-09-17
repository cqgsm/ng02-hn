import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: number[];

  constructor() { }

  ngOnInit() {
  }

}
