import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PodcastFile } from './metadata.service';

@Component({
    templateUrl: 'episode-selector.template.html',
    selector: 'episode-selector'
})
export class EpisodeSelectorComponent {

    @Input()
    episodes: PodcastFile[];

    @Output()
    selected = new EventEmitter<PodcastFile>();

    select(episode:PodcastFile) {
        this.selected.emit(episode);
    }
}