import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export interface PodcastFile {
    filename: string;
    url: string;
}

export interface Metadata {
    title: string;
    description: string;
    possibleEpisodes: PodcastFile[];
}

@Injectable()
export class MetadataService {

    constructor(
        private http: Http
    ) { }

    getMetadata(url:string) {
        const search = new URLSearchParams();
        search.set('url', url);

        const headers = new Headers({
            'Accept': 'application/json'
        });

        return this.http.get('/api/metadata', { search, headers })
            .map(response => <Metadata>response.json());
    }
}