import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Podcast } from './podcast';
import { PodcastService } from './podcast.service';

@Component({
    selector: '[podcast-list-row]', // have to use an attribute selector because browser gets mad at all the <podcast-list-row> elements inside the table
    templateUrl: 'podcast-list-row.component.html'
})
export class PodcastListRowComponent {

    constructor(
        private podcastService : PodcastService
    ) {

    }

    @Input()
    podcast : Podcast;

    @Output()
    deleted = new EventEmitter();

    deleting = false;
    confirming = false;

    confirmDelete() : void {
        this.confirming = true;
    }

    cancelDelete() : void {
        this.confirming = false;
    }

    delete() : void {

        this.deleting = true;
        this.podcastService.delete(this.podcast)
            .then(() => {
                this.deleting = false;
                this.deleted.emit();
            })
            .catch(err => {
                this.deleting = false;
                return Promise.reject(err);
            });


    }
}