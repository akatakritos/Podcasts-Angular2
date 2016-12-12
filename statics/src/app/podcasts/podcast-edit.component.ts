import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';
import { MetadataService, PodcastFile } from './metadata.service';

@Component({
    templateUrl: 'podcast-edit.component.html'
})
export class PodcastEditComponent implements OnInit {

    constructor(
        private podcastService : PodcastService,
        private metadata: MetadataService,
        private router : Router,
        private location : Location,
        private titleService: Title
    ) {

    }

    podcast : Podcast;
    possibleEpisodes: PodcastFile[];
    error: string;

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

    load(url:string) : void {
        this.error = null;

        this.metadata.getMetadata(url).subscribe(v => {
            this.podcast.description = v.description;
            this.podcast.title = v.title;
            this.possibleEpisodes = v.possibleEpisodes;

            if (v.possibleEpisodes.length === 1) {
                this.podcast.url = v.possibleEpisodes[0].url;
            }
        }, error => {
            console.log(error);
            this.error = error.statusText || "unkown";
        });
    }

    pickEpisode(episode: PodcastFile) {
        this.possibleEpisodes = null;
        this.podcast.url = episode.url;
    }
}