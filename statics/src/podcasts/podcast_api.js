import 'whatwg-fetch';
import { fromJS } from 'immutable';

export function savePodcast(podcast) {
    return fetch('/api/podcasts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toApiModel(podcast))
    })
    .then(response => response.json())
    .then(json => fromJS(fromApiModel(json)));
}

export function getPodcasts() {
    return fetch('/api/podcasts')
        .then(response => response.json())
        .then(json => fromJS(json.map(fromApiModel)));
}

export function deletePodcast(id) {
    return fetch(`/api/podcasts/${id}`, {
        method: 'DELETE'
    });
}

function toApiModel(json) {
    return {
        podcastId: json.id,
        downloadUrl: json.url,
        title: json.title,
        description: json.description
    };
}

function fromApiModel(json) {
    return {
        id: json.podcastId,
        url: json.downloadUrl,
        title: json.title,
        description: json.description
    };
}