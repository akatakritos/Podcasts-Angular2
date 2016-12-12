import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PodcastListComponent } from './podcast-list.component';
import { PodcastEditComponent } from './podcast-edit.component';
import { PodcastListRowComponent } from './podcast-list-row.component';
import { PodcastService } from './podcast.service';
import { MetadataService } from './metadata.service';
import { PodcastRoutingModule } from './podcast-routing.module';
import { EpisodeSelectorComponent } from './episode-selector.component';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        PodcastRoutingModule,
        SharedModule
    ],
    declarations: [
        PodcastListComponent,
        PodcastEditComponent,
        PodcastListRowComponent,
        EpisodeSelectorComponent
    ],
    exports: [
    ],
    providers: [
        PodcastService,
        MetadataService
    ]
})
export class PodcastModule {

}