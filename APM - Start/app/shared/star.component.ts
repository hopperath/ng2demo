import {Component, Input, Output} from "angular2/src/core/metadata";
import {OnChanges} from "angular2/src/core/metadata/lifecycle_hooks";
import {EventEmitter} from "angular2/src/facade/async";
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls:  ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges
{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void
    {
        this.starWidth = this.rating * 86 / 5;
        console.log(`setting rating=${this.rating}`)
    }

    onClick()
    {
       this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }

}
