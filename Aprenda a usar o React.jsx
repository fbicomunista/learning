


    % bem vindo(a), React é uma das principais frameworks de desenvolvimento, junto com o angular que leva o conceito de single page (pagina unica, o site todo é carregado e partes das quais voce teria que pedir novamente uma requisição já estariam "escondiidas" na pagina), VueJS e React que usa a ideia de Componentes em um site, conceito esse que facilitaria a organização e correção de bug na pagina 
    
 
 @ existem varios modos para voce criar um projeto em React usando o nodeJS
 
 @ O comando mais utilizado é o creat-react-app
 
 
 
 
 @ Execute este comando para criar um aplicativo React chamado my-react-app :
 
 # npx create-react-app my-react-app
 
 @ Execute este comando para mover para o my-react-app o dretório que voce vai usar :
 
 # cd my-react-app
 
 @ execute esse para executar a aplicação :
 
 # npm start
 
 
 
 
 
 
 
 
 
 
 @ O React usa o JSX como "linguagem", jsx é uma mistura de Html e JavaScript ( no caso se voce for usar TypeScript ao inves de JavaSript, a sigla será TSX )
   
 @ Os modulos do JavaScript são chamados pelo React de "Componetes"
 
 @ O React nos permite criar componentes de interface do usuário reutilizáveis

 @ Primeiro de tudo, precisamos importar o React com o seguinte codigo :
 
 @ import React from 'react' ## importa o React
   import ReactDom from 'react-dom' ## importa uma parte do React que ira manipular a arvore DOM

   
# Depois iremos precisar saber como chamar o React para fazer algo

@ ReactDOM.render{} ## A função .render, ira dizer para o React renderizar algo {mostrar) o que estiver entre {}

# Todo componente começa com letra maiuscula e é parecido com uma tag HTML mas é escrito em linguagem JSX/TSX
	
   <Primeiro></Primeiro> ## Primeiro é um modulo JavaScript e como todo modulo é componente em React, podemos chamar quantos Componentes quizermos
   <Segundo></Segundo> ## componente com o nome de Segundo
   <Terceiro></Terceiro> ## componentes com o nome de Terceiro

 # Porem, não podemos colocar Componetes de maneira proxima, para isso usamos uma "Tag" especifica que ira entre os componentes, permitindo que eles se mostrem proximos um do outro
 
 
 ReactDOM.render{
	 <React.fragment>
           <Primeiro> 
           <Segundo>
           <Terceiro> 
	 </React.fragment> ## Agora, todos os 3 Componentes iram se mostrar juntos
	 
 # voce tambem pode só colocar uma tag com nada dentro de abertura e fechamento para poder colocar os componenes, asssim, não precisando escrever o React.fragment 

         <>
           <Primeiro> 
           <Segundo>
           <Terceiro> 
         </> ## ira surtir o mesmo efeito

	 
 @ existem dois tipos de componentes React, componenetes criados atraves de uma classe e atraves de uma function

	 
 @ para criar atraves de uma class, o componente deve incluir a extends React.Component, essa função pega como heraça o React e dá acesso as funçoes do React.Component
	 
	 
 @@ O componete tambem requer um render() como metodo, este método retorna HTML	 

 # class store extends React.Componenet {
	render{
		return <h2> Hello, I buy in a Store </H2>
		
		
 @ para criar atraves de uma funçao, o nome do Componenente será o nome da função e o seu HTML sera o bloco   da função


 # function Store() {
	return <h2>, hello, i buy a store </h2>}
	

 @ para exibir o Componente Store terá que criar uma variavel/constante atribuindo a ela a raiz e depois renderiza-la com seguinte codigo:	

	
 # const root = ReactDOM.createRoot(document.getElementById("root"))
   root.render(<Car/>)
	
	       
@ Os componenetes tambem podem ser passados como props (propriedades), props são parecidos com argumentos de uma função e voce os envia para o componente como atributo
	   

@@ Podemos tambem mudar seu conteudo com as propriedades, como se fosse atributos CSS no componente 	 
		 

# function Store(props) {
	return <h2> I am a {props.color} Store </h2>
}

  const root = reactDOM.createRoot(document.getElementById("root"))
  root.render(<Store color="red"/>
)

 
 @ Podemos nos referir a componentes dentro de outros componentes

 
 # function Store() {
return <h2> I am a Store! </h2>
 }
  
 function Contry() {
	 return (
	<React.fragement>
		 <h1> Store is building in </h1>
		 <




	ReactDOM.render{
	 <Fragment.react>
           <Primeiro text = Agora meu nome é maicon> 
           <Segundo = >
           <Terceiro = > 
	 </Fragment.react>	 
		 
		 
		 
		 
		 
		 
 @ {/*  */} # assim que se escreve um comentario em React

 # {/* Ola! eu sou um comentario */} 















