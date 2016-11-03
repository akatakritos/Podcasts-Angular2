import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PodcastListComponent } from './podcast-list.component';
import { PodcastService } from './podcast.service';
import { PodcastRoutingModule } from './podcast-routing.module';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        PodcastRoutingModule
    ],
    declarations: [
        PodcastListComponent
    ],
    exports: [
        PodcastListComponent
    ],
    providers: [
        PodcastService
    ]
})
export class PodcastModule {

}