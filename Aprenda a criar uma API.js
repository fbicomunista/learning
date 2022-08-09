
 % bem vindo(a) ao meu tutorial de como criar uma API web, 
     a dois termos muito falados sobre APIS que são as API REST e a API SOAP, 
     enquanto a primeira segue um paradigma recomendado pela w3 de criação, já a segunda,
     segue um protocolo mais fechado e rigido sobre como ira sera feita a forma de protocolo dos dados pela internet 
     (HTTP, FTP, ICP/IP, etc)

@ readyState # contém o status do XMLHttpRequest

@ onreadystatechange # define uma função de retorno de 
 chamada a ser executada quando o readyState for alterado

@ statuspropriedade e as statusTextpropriedades # mantêm o
 status do objeto XMLHttpRequest

@ onload # Serve indicar o que fazer quando a requisição 
 carregar com sucesso

@ responseText # Retorna a resposta do servidor como uma 
 string JavaScript e você pode usá-la adequadamente

@ responseXML # Retorna a resposta do servidor como um 
 objeto XML DOM

@ função de retorno de chamada # Função passada como 
  PARAMETRO para outra função, Nesse caso a função de retor
  no de chamada, DEVE CONTER O CODIGO A SER EXECUTADO quan
  do a resposta estiver pronta

@ responseTEXT # Retorna os dados de resposta como uma 
  string 

@ responseXML # Retorna os dados de resposta como dados 
  XML

@ status # Retorna o número do status de uma solicitação 
  seus estados são definidos pelos seguintes numeros:


new XMLHttpRequest() # Cria um novo objeto XMLHttpRequest 
Para enviar uma requisição para um servidor, usamos os me
todos open() e send() do XMLHttpRequest objeto:

const http = new XMLHttpRequest() # cria uma const da qual vai ser o intermitente entre o HTML e a API (AJAX)

xhttp.open("GET", "ajax_info.txt", true)
xhttp.send()

open("method", "url", "async", "user", "psw") 

 Seus principais parametros são:

@ method # O tipo de solicitação  GET  ou  POST

@ url # O local do arquivo

@ async # O true assíncrono false (diz em boolean se o JavaScript ira ficar esperando o retorno do server)

@ user # Nome opcional de usuario

@ psw # verdadeiro (assíncrono) ou falso (síncrono)

@ abort() # Cancela a mais recente requisição

@ getAllResponseHeaders() # Retorna um header information 

@ getResponseHeader() # Retorna um header information 
 especifica

@ send() # Envia a requisição para o servidor Usado para  solicitações GET 
 
@ send(string) # Envia a solicitação para o servidor. Usado  para solicitações POST 
 
@ setRequestHeader() # Adiciona um par de rótulo/valor ao  cabeçalho a ser enviado 
 
@ onload() # Define uma função a ser chamada quando a solicitação for recebida (carregada)

@ onreadystatechange() # Define uma função a ser chamada quando a propriedade readyState muda

@ readyState() # Mantém o status do XMLHttpRequest, seus estados são definidos pelos seguintes numeros:

       0: pedido não inicializado 
       1: conexão do servidor estabelecida 
       2: pedido recebido 
       3: processamento do pedido 
       4: pedido finalizado e resposta pronta responseText 

 

  		200: OK 
  		403: Proibido 
  		404: não encontrado 

 @ statusText  # Retorna o texto de status (por exemplo,  OK  ou  Não encontrado )

## Obs: Se você tiver mais de uma tarefa AJAX em um site, 
   deverá criar uma função para executar o 
   XMLHttpRequestobjeto e 
   uma função de retorno de chamada para cada tarefa AJAX, a
   chamada de função deve conter a URL e qual função  
   chamar quando a resposta estiver pronta, veja o codigo 
   abaixo:


 @ loadDoc(url-1, myFunction1)
   loadDoc(url-2, myFunction2)
  
   function loadDoc(url, cFunction){
    const xhttp = new XMLHttpRequest()
     xhttp.onload = function() {cFunction(this)}
     xhttp.open(GET, url)
     xhttp.send()}  

   function myFunction1(xhttp){

   }
     
   function myFunction2(xhttp){

   }
	
	
   Obs: Para enviar dados como um formulário HTML, 
   adicione um
   cabeçalho HTTP com setRequestHeader(), especifique os 
   dados que deseja enviar no send() metodo: 


@ http.open(GET,  http://localhost:3000/profile) # a função open serve para iniciar uma comunicação do HTML e API, o primeiro argumento dela é o 
  pedido para ele (GET ou POST), o segundo argumento é o endereço para aonde ira ser feito o pedido

@ http.send() # send é uma função que serve para indicar para aonde eu irei enviar essa requisição


http.onload = () => {
const data = http.response # response  significa o conteudo que o servidor ira devolver

console.log(data)
} 

@ promise é uma função facilitadora para criar instancias de API

const promise = new promise((resolve, reject)) => { 

const http = new XMLHttpRequest()
http.open(GET, http://localhost:3000/profile)
http.send()
if(http.states => 400){
	reject(JSON.parse(http.response))
} else {
	resolve(JSON.parse(http.response))
}

	}) 
  

return promise

http.onload = () => {
	const data = JSON.parse{http.response}
	data.forEach(elements => {
		tabela.appendChild(criaNovaLinha(elements nome, elements.email))

JSON.stringify() # recebe uma string JSON e a transforma em um objeto JavaScript (string)
JSON.parse(texto, reviver) # recebe uma string e a transforma em um JSON


loadDoc(url-1, myFuntion1)
loadDoc( url-2 , myFunction2)

function loadDoc(url, cFunction){
	const xhttp = new XMLHttpRequest()
	xhttp.onload = function() {cFunction(this)}
	xhttp.open(GET, url)
	xhttp.send()
}

functionmyFunction1(xhttp){

}

function myFunction2(xhttp){

}



loadDoc(url-1 , myFunction)
loadDoc(url-2 , myFunction)

function loadDoc(url, cfuntion) {
	const xhttp = new XMLHttpRequest()
	xhttp.onload = function() {cfunction(this)}
	xhttp.open(GET, url)
	xhttp.send()
}

function myFunction1(xhttp){

}

function myfunction2(xhttp){

}


xhttp.open(POST, ajax_test.asp )
xhttp.setRequestHeader(Content-type, application/x-www-form-urlencoded)
xhttp.send(fname=Henry&lname=Ford )


<p>Start typing a name in the input field below:</p>
<p> Suggestions: <span id= txtHint ></span></p>

<form>
First name: <input type = text  onkeyup = showHint(this.value) >
</form>

<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById(txtHint).innerHTML = 
    return
  } else {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onload = function() {
      document.getElementById( txtHint ).innerHTML = this.responseText
    }
  xmlhttp.open(GET,  gethint.php?q= + str)
  xmlhttp.send()
  } # faz uma verificação de um nome digitado no input no servidor



}
