import { Component, OnInit } from '@angular/core';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';

@Component({
    templateUrl: 'podcast-list.component.html',
    selector: 'podcast-list'
})
export class PodcastListComponent implements OnInit {

    podcasts : Podcast[];

    constructor(
        private podcastService : PodcastService
    ) {
    }

    ngOnInit() : void {

        this.podcastService.getPodcasts()
            .then(podcasts => this.podcasts = podcasts);

    }

}