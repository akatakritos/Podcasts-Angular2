import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';
import { MetadataService, PodcastFile } from './metadata.service';

function getFilename(url: string) {
    return url.split('/').pop().split('#')[0].split('?')[0];
}

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
    statusMessage: string;

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
        this.statusMessage = null;

        if (url.includes('mp3')){
            this.podcast.url = url;
            this.podcast.title = getFilename(url);
            this.statusMessage = "It looks like the URL you entered was for an episode media file. Fill in the rest of the fields below.";
            return;
        }

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