import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

	public progress: number = 25 

	constructor() { }

	ngOnInit() {
	}

}
