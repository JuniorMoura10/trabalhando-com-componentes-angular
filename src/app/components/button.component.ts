import { Component, Input } from '@angular/core'

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent{
  @Input() label: string;
  buttonText: string = 'ACESSAR';
  buttonNumber: number = 10;
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonObject = {
    labelAdd: 'Adicionar ao carrinho',
    labelRmv: 'Remover do carrinho'
  }

  getAlert(){
    alert('Adicionado ao(s) ' + this.label)
  }
}