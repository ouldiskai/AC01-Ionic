import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  valorGrau = '';
  convertido = '';
  constructor() {}

  converteCtoF(){
    const valorGrau = (parseFloat(this.valorGrau)*9/5)+32;
    this.convertido =`Valor em Fahrenheit: ${valorGrau.toFixed(2)} F`
  }
  converteFtoC(){
    const valorGrau = (parseFloat(this.valorGrau)-32)*5/9;
    this.convertido =`Valor em Celsius: ${valorGrau.toFixed(2)} C`
  }

  l1='';
  l2='';
  l3='';
  triangulo='';
  verificar(){
    if (this.l1+this.l2<this.l3 || this.l1+this.l3<this.l2 || this.l2+this.l3<this.l1){
      this.triangulo=`Os três lados fornecidos não formam um triângulo`
    }
    else if(this.l1==this.l2 && this.l2==this.l3){
      this.triangulo=`Os três lados fornecidos formam um triângulo equilátero`
    }
    else if(this.l1 == this.l2 && this.l2 != this.l3 || this.l1 == this.l3 && this.l3 != this.l2 || this.l2 == this.l3 && this.l3 != this.l1){
      this.triangulo=`Os três lados fornecidos formam um triângulo isósceles`
    }
    else{
      this.triangulo=`Os três lados fornecidos formam um triângulo escaleno`
    }
  }

  n1=''
  n2=''
  n3=''
  n4=''
  m=''
  resultado=''
  media(){
    const m =(parseFloat(this.m = this.n1+this.n2+this.n3+this.n4)/4)
    if (m < 3){
      this.resultado=`Retido, média ${m}`
    }
    else if (m < 5.9){
      this.resultado=`Recuperação, média ${m}`
    }
    else{
      this.resultado=`Aprovado, média ${m}`
    }
  }

}

  
