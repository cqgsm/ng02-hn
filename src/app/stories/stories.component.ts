import { Component, OnInit } from '@angular/core';

import { HnApiService } from '../hn-api.service';

@Component({
  selector: 'hn-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: number[];

  constructor(private _hackerNewsAPIService: HnApiService) { }

  ngOnInit() {
    this._hackerNewsAPIService.fetchStories()
                    .subscribe(
                      items => this.items = items,
                      error => console.log('Error fetching stories'));
  }

}
