import { Component, Input } from '@angular/core';

@Component({
    templateUrl: 'spinner.component.html',
    selector: 'spinner'
})
export class SpinnerComponent {

    @Input()
    text = "Loading..."

}