import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PodcastListComponent } from './podcast-list.component';
import { PodcastEditComponent } from './podcast-edit.component';
import { PodcastListRowComponent } from './podcast-list-row.component';
import { PodcastService } from './podcast.service';
import { PodcastRoutingModule } from './podcast-routing.module';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        PodcastRoutingModule
    ],
    declarations: [
        PodcastListComponent,
        PodcastEditComponent,
        PodcastListRowComponent
    ],
    exports: [
    ],
    providers: [
        PodcastService
    ]
})
export class PodcastModule {

}