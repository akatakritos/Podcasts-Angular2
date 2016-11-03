import { Component, OnInit } from '@angular/core';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';

@Component({
    templateUrl: 'podcast-list.component.html'
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

    delete(podcast : Podcast) : void {
        this.podcastService.delete(podcast)
            .then(() => {
                this.podcasts = this.podcasts.filter(p => p !== podcast)
            });
    }

}