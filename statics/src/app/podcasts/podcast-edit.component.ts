import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';

@Component({
    templateUrl: 'podcast-edit.component.html'
})
export class PodcastEditComponent implements OnInit {

    constructor(
        private podcastService : PodcastService,
        private router : Router,
        private location : Location,
        private titleService: Title
    ) {

    }

    podcast : Podcast

    ngOnInit() : void {

        this.titleService.setTitle("Create Podcast");
        this.podcast = new Podcast();

    }

    save(podcast : Podcast) : void {
        this.podcastService.save(podcast)
            .then(() => this.router.navigate(['podcasts']));
    }

    back() : void {
        this.location.back();
    }
}