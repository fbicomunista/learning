


   % bem vindo(a), React é uma das principais fameworks de desenvolvimento, junto com o angular que leva o conceito de single page (pagina unica, o site todo é carregado e partes das quais voce teria que pedir novamente uma requisição já estariam "escondiidas" na pagina), VueJS o React usa a ideia de Componentes, conceito esse que facilitaria a organização e corrção de bug na pagina 

   
@ import React from 'react'
  import ReactDom from 'react-dom'
  
@ {/*  */} # assim que se escreve um comentario em React

# {/* Ola! eu sou um comentario */} 


@ ReactDOM.render{} ## ira dizer para o React renderizar algo {mostrar) o que estiver entre {}





ReactDOM.render(
	<React.fragment>
		<primeiro></primeiro>
		<ComParametro titulo="Esse é o titulo" subtitulo="Esse é um subtitulo"></comParametro>
	</React.fragment>,
	document.getElementById("root")

)

export default parametros =>
	<>
		<h3>{parametros.titulo}</h3>
		<p>{array(10).fill(0)}</p> # ira preexer uma array toda pelo numero 0
	</> # tudo que estiver entre {} o React ira interpretar como codigo JavaScript


ReactDOM.render(
	<div className=""> # é obrigatorio no React usar "className" ao inves só de "Class"
	</div>
	);  



type TweetProps = {
	text: string; # pode ser colocado um ponto de interrogação depois de text para descrever aquela tipagem é opcional por exemplo: text?: string;
} # tipa a variavel "TweetProps" como uma string



type dropBox = {
	text:string;
}



export function Tweet(props: dropBox){
	return (
	<p>{props.text}</p>
)
}



export function Tweet(props: TweetProps) {
	return (
		<p>Tweet</p>
	); # repassa a tipagem do "TweetPromps" para o "Tweet"
}










function App(){
	const (tweet, setTweets) = useState =><string[]>({
		"Tweet 1",
		"Tweet 2",
		"Tweet 3"

	}) # useState é uma função do React que toda vez que uma variavel/constante muda o seu valor todo o componente sera renderizado novamente e utilizando as <> (dinerigs) é preciso colocar uma lista de string logo, <string[]>



function createTweet(){
	setTweets([Tweets, "Tweet 5"])

}

	return (
		<div>
		{Tweets.map(tweet => {
			return <Tweet text={tweet} />
		} # criei um laço de repetição que para cada tweet que tiver na lista 

		<button onclick= {createTweet} style{{ }}> Adicionar tweet </button>
		</div>



	<div>

		
		{Tweet.map(Tweet => {
			return <Tweet text={tweet}/>





	return (
		<div>
			<Tweet text="Tweet 1"/>
			<Tweet text= )

}


















