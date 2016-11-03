import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PodcastListComponent } from './podcast-list.component';

const routes : Routes = [
    { path: 'podcasts', component: PodcastListComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ]
})
export class PodcastRoutingModule {

}