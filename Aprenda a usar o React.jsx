
  % bem vindo(a), Esse tutorial exige que voce já saiba o basico de HTML, CSS e principalmente JavaScript,
React é uma das principais frameworks de desenvolvimento para sites modernos, 
junto com       o angular que leva o conceito de single page (pagina unica, o site todo é carregado e partes das quais voce teria que pedir novamente uma requisição para o server já estariam "escondidas" na pagina), 
o React por sinal, usa a ideia de Componentes em um site, conceito esse que facilita a organização e correção de bug na pagina, 
visto que todo Componente retorna somente um HTML. 

    
 @ {/*  */} # Assim que se escreve um comentario em React entre {/*  */}

 # {/* Ola! eu sou um comentario em React ;) */} 

 # {/* Oi! eu tambem sou um comentario em React, prazer :) */} 


 @ O React usa o JSX como 'linguagem', jJSX é uma mistura de HTML e JavaScript (no caso se voce for usar TypeScript ao inves de JavaSript, 
a sigla será TSX, mas não irei usar TypeSript aqui para facilitar o    conhecimneto de React)
   
 @ Os modulos do JavaScript são chamados pelo React de 'Componentes'
 
 @ O React nos permite criar componentes de interface do usuário reutilizáveis

 @ existem varios modos para voce criar um projeto em React usando o nodeJS
 
@@ O comando mais utilizado é o creat-react-app
 
 

 @ Execute este comando para criar um aplicativo React chamado my-react-app:
 
 # npx create-react-app my-react-app ## criei o meu primeiro projeto chamado de my-react-app
 

 @ Execute my-react-app para mover para o my-react-app o dretório que voce vai usar:
 
 # cd my-react-app
 

 @ execute npm start para executar a aplicação:
 
 # npm start
 
 
 @ Primeiro de tudo, precisamos importar o React com o seguinte codigo:
 
 @ import React from 'react' ## importa o React
   import ReactDom from 'react-dom' ## importa uma parte do React que ira manipular a arvore DOM

   
 # Depois iremos precisar saber como chamar o React para fazer algo
									 
 # Todo componente começa com letra maiuscula e é parecido com uma tag HTML, mas é escrito em linguagem      
 JSX/TSX
	
   <Primeiro></Primeiro> ## Primeiro é um modulo JavaScript e como todo modulo é componente em React,         
podemos chamar quantos Componentes quizermos
   <Segundo></Segundo> ## componente com o nome de Segundo

   <Terceiro></Terceiro> ## componentes com o nome de Terceiro

			
 # Porem, não podemos colocar Componetes de maneira proxima, para isso usamos uma Tag especifica que       
 ira entre os componentes, permitindo que eles se mostrem proximos um do outro chamada                    
 'React.fragment'
 
 
 @ Para renderizar algo usando o React, pricisamos usar uma função: 
 
 @@ ReactDOM.render() ## Essa função sempre ira receber dois argumentos, um codigo HTML e um elemento         
 HTML
 
 
 @@ A função .render{}, ira dizer para o React renderizar algo {mostrar) o que estiver entre { }
 
 
  @ ReactDOM.render{
	 <React.fragment>
		 
         	<Primeiro> 
           	<Segundo>
           	<Terceiro> 
		 
	 </React.fragment> ## Agora, todos os 3 Componentes iram se mostrar juntos
	 
   }	
	  
 # voce tambem pode só colocar uma tag vazia com abertura e fechamento para poder colocar os       
 componentes, assim, não precisando escrever o React.fragment 

         <>
	 
         	<Primeiro> 
          	<Segundo>
           	<Terceiro> 
	 
         </> ## ira surtir o mesmo efeito

	 
 @ existem dois tipos de componentes React, componenetes criados atraves de uma classe e atraves de uma     
 function

	 
 @ para criar atraves de uma class, o componente deve incluir a extends 'React.Component', essa função    
 pega como herança o React e dá acesso as funçoes do React.Component, sem ela é impossivel criar    
 Componente do tipo classe
	 
	 
 @@ O componete tambem requer um render(), este método retorna HTML	 

 # class Store extends React.Component {
	render{
		return <h2> Hello, I buy in a Store </H2>
   }	
		
 @ para criar atraves de uma funçao, o nome do Componenente será o nome da função e o seu HTML sera o     
 bloco da função


 # function Store() {
	return <h2>, hello, i buy a store </h2>}
	

 @ para exibir o Componente Store terá que criar uma variavel/constante atribuindo a ela a raiz e depois  
 renderiza-la com seguinte codigo:	

	
 # const root = ReactDOM.createRoot(document.getElementById('root'))
   root.render(<Car/>)
	
	       
 @ Os componenetes tambem podem ser passados como props (propriedades), props são parecidos com           
   argumentos de uma função e voce os envia para o componente como se fossem atributos CSS
	   

@@ Podemos tambem mudar seu conteudo com as propriedades, como se fosse atributos CSS no componente 	 
		 

# function Store(props) {
  	return <h2> I am a {props.color} Store </h2>
  }

  const root = reactDOM.createRoot(document.getElementById('root'))
  root.render(<Store color='red'/>
  )

 
 @ Podemos nos referir a componentes dentro de outros componentes

 
 # function Contry() {
   	return <h2> I am a Store! </h2> 
 } ## criei o componente Contry
  
   function Store() {
   	return (
	<React.fragment>
		 <h1> My Store is building in a </h1>
		 <Contry/>
        </React.fragment> ## criei o componente Store e coloquei o outro Componente Contry dentro dele,      
		assim, quando o browser for ler esse codigo, ira escrever "My Store is building in a Contry"     
		(como se estivesse em uma tag <h1></h1>)
		 



 @ ReactDOM.render{
   	<Fragment.react>
        	<Primeiro text = Agora meu nome é maicon> 
                <Segundo = >
           	<Terceiro = > 
	</Fragment.react>	 
		 
		 
		 
		 
		 
		 
















