import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';

@Component({
    templateUrl: 'podcast-edit.component.html'
})
export class PodcastEditComponent implements OnInit {

    constructor(
        private podcastService : PodcastService,
        private router : Router
    ) {

    }

    podcast : Podcast

    ngOnInit() : void {

        this.podcast = new Podcast();

    }

    save(podcast : Podcast) : void {
        this.podcastService.save(podcast)
            .then(() => this.router.navigate(['podcasts']));
    }
}