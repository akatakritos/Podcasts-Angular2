import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';

@Component({
    templateUrl: 'podcast-list.component.html'
})
export class PodcastListComponent implements OnInit {

    podcasts : Podcast[];

    constructor(
        private podcastService : PodcastService,
        private titleService : Title,
    ) {
    }

    ngOnInit() : void {

        this.titleService.setTitle("Current Podcasts");
        this.podcastService.getPodcasts()
            .then(podcasts => this.podcasts = podcasts);

    }

    deleted(podcast : Podcast) : void {
        this.podcasts = this.podcasts.filter(p => p !== podcast);
    }

}