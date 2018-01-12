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
	public resposta: string
	public rodada: number = 0
	public rodadaFrase: Phrase

	constructor() {
		this.rodadaFrase = this.frases[this.rodada]
		console.log(this.rodadaFrase)
	}

	ngOnInit() {
	}

	public atualizaResposta(resposta: Event): void {
		this.resposta = ((<HTMLInputElement>resposta.target).value)
	}

	public verificarResposta(): void {
		if(this.resposta == this.frases[0].phraseEng){
			console.log('Resposta igual...')
		}else{
			console.log('Resposta diferente, gajo!')
		}
	}
}
