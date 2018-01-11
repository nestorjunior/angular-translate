import { Component, OnInit } from '@angular/core'
import { Phrase } from '../shared/phrase.model'
import { PHRASES } from './phrase-mock'

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

	public frases: Phrase[] = PHRASES

	constructor() { console.log(this.frases) }

	ngOnInit() {
	}

}
