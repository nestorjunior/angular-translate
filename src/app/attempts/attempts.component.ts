import { Component, OnInit } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
	selector: 'app-attempts',
	templateUrl: './attempts.component.html',
	styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

	public emptyHeart: string = '/assets/heart_empty.png'
	public fullHeart: string = '/assets/heart_full.png'

	public coracoes: Heart[] = [
		new Heart(true),
		new Heart(true),
		new Heart(true)
	]

	constructor() { 
		console.log(this.coracoes)
	}

	ngOnInit() {
	}

}
