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
}

@Injectable()
export class PodcastService {

    constructor(
        private http: Http
    ) {

    }

    private apiRoot = "/api/"

    getPodcasts() : Promise<Podcast[]> {
        return this.http.get(this.apiRoot + '/podcasts')
            .toPromise()
            .then(response => response.json() as PodcastDto[])
            .then(dtos => dtos.map(PodcastDto.toPodcast));
    }

}