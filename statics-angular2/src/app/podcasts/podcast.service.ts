import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Podcast } from './podcast';

class PodcastDto {
    podcastId : number;
    downloadUrl : string;
    title: string;
    description: string;

    static toPodcast(dto : PodcastDto) : Podcast {
        return {
            id : dto.podcastId,
            url : dto.downloadUrl,
            title: dto.title,
            description: dto.description
        };
    }

    static fromPodcast(podcast : Podcast) : PodcastDto {
        return {
            podcastId: podcast.id,
            downloadUrl: podcast.url,
            title: podcast.title,
            description: podcast.description
        };
    }
}

@Injectable()
export class PodcastService {

    constructor(
        private http: Http
    ) {

    }

    private apiRoot = "/api/"

    getPodcasts() : Promise<Podcast[]> {
        return this.http.get(this.apiRoot + 'podcasts')
            .toPromise()
            .then(response => response.json() as PodcastDto[])
            .then(dtos => dtos.map(PodcastDto.toPodcast));
    }

    save(podcast : Podcast) : Promise<Podcast> {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        });

        return this.http.post(this.apiRoot + 'podcasts', JSON.stringify(PodcastDto.fromPodcast(podcast)), { headers })
            .toPromise()
            .then(response => response.json() as PodcastDto)
            .then(PodcastDto.toPodcast);
    }

}