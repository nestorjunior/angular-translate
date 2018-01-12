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
	public resposta: string = ''
	public rodada: number = 0
	public rodadaFrase: Phrase
	public progress: number = 0

	constructor() {
		this.atualizaRodada()
	}

	ngOnInit() {
	}

	public atualizaResposta(resposta: Event): void {
		this.resposta = ((<HTMLInputElement>resposta.target).value)
	}

	public verificarResposta(): void {
		if(this.resposta == this.rodadaFrase.phrasePtBr){
			
			alert('Resposta correta!')

			//Trocar pergunta da rodada
			this.rodada++

			//Atualiza o progresso
			this.progress = this.progress + (100 / this.frases.length)
			console.log(this.progress)

			//Comparar a frase digitada com o valor tradução do objeto
			this.rodadaFrase = this.frases[this.rodada]	

		}
		else{
			alert('Tá errado, ô tonto!!! A primeira letra é maiúscula.')
		}
	}

	public atualizaRodada(): void {
		//Define a frase da rodada
		this.rodadaFrase = this.frases[this.rodada]

		//Limpar o campo resposta: text-area
		this.resposta = ''
	}

}
