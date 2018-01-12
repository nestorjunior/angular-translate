export class Heart {
	
	constructor(
		public full: boolean,
		public urlFullHeart: string = 'https://nestorjunior.github.io/angular-translate/assets/heart_full.png',
		public urlEmptyHeart: string = 'https://nestorjunior.github.io/angular-translate/assets/heart_empty.png'
	) { }

	public showHeart(): string {
		if (this.full) { 
			return this.urlFullHeart
		} else {
			return this.urlEmptyHeart
		}
	}

}