import {Component, OnInit} from '@angular/core'
import { SmileysService } from './smileys.service'

import { Smileys } from './smileys'
@Component({
    selector: 'smilelist',
    templateUrl: './smileys.component.html',
    providers: [SmileysService]
})
export class SmileysComponent implements OnInit {
    smileys: Smileys[];

    constructor(private smileysService: SmileysService){
    }

    ngOnInit(){
        this.getSmileys();
    }

    getSmileys(){
        this.smileysService.getSmileys()
            .subscribe(
                smileys => this.smileys = smileys);
    }
}
