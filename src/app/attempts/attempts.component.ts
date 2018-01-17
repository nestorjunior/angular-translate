import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
	selector: 'app-attempts',
	templateUrl: './attempts.component.html',
	styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

	@Input() public attempts: number

	public coracoes: Heart[] = [
		new Heart(true),
		new Heart(true),
		new Heart(true)
	]

	constructor() {
		console.log(this.coracoes)
	}

	ngOnChanges(){
	}
	
	ngOnInit() {
	}

}
