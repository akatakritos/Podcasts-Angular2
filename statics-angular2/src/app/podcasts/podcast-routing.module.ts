import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PodcastListComponent } from './podcast-list.component';
import { PodcastEditComponent } from './podcast-edit.component';

const routes : Routes = [
    { path: 'podcasts', component: PodcastListComponent },
    { path: 'podcasts/new', component: PodcastEditComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class PodcastRoutingModule {

}