


    % bem vindo(a), React é uma das principais frameworks de desenvolvimento, junto com o angular que leva o conceito de single page (pagina unica, o site todo é carregado e partes das quais voce teria que pedir novamente uma requisição já estariam "escondiidas" na pagina), VueJS e React que usa a ideia de Componentes em um site, conceito esse que facilitaria a organização e correção de bug na pagina 
    
    
 @ O React usa o JSX como "linguagem", jsx é uma mistura de Html e JavaScript ( no caso se voce for usar TypeScript ao inves de JavaSript, a sigla será TSX )
   
 @ Os modulos do JavaScript são chamados pelo React de "Componetes"
 

 @ Primeiro de tudo, precisamos importar o React com o seguinte codigo :
 
 @ import React from 'react' ## importa o React
   import ReactDom from 'react-dom' ## importa uma parte do React que ira manipular a arvore DOM

   
# Depois iremos precisar saber como chamar o React para fazer algo

@ ReactDOM.render{} ## A função .render, ira dizer para o React renderizar algo {mostrar) o que estiver entre {}

# todo componente começa com letra maiuscula e é parecido com uma tag HTML mas é escrito em linguagem JSX/TSX
	
   <Primeiro></Primeiro> ## Primeiro é um modulo JavaScript e como todo modulo é componente em React podemos chamar quantos Componentes quizermos
   <Segundo></Segundo> ## componente com o nome de Segundo
   <Terceiro></Terceiro> ## componentes com o nome de Terceiro

 # porem, não podemos colocar Componetes de maneira proxima, para isso usamos uma "Tag" especifica que ira entre os componentes, permitindo que eles se mostrem          proximos um do outro
 
 
 
  
 @ {/*  */} # assim que se escreve um comentario em React

 # {/* Ola! eu sou um comentario */} 















