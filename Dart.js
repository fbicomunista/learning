
void main(){

	void main(){}
	criarBotão("botaoSair", cor: "preto", largura: 15.0);


		void main("isabela", "rotvailer", comportamento: normal, cor: branco, numero de patas:  )


	}

	void criarBotao(string texto, (string cor, double largura)){
		# criei uma função void que precisa da string cor e as outras duas strings de maneira opcional

		print(texto);
		print(cor ?? "preto"); # a cor padrao ira ser preta caso só seja digitado só a string texto
		print(largura ?? 10.0); # a largura padrao ira ser 10.0 caso só seja digitado só a string texto 
	}

	void botaoCriado(){
		print("botao criado");
	}



	void criarBotao(string texto, function criadoFunc, (string cor, double largura)){
		# criei uma função void que precisa da string cor e as outras duas strings de maneira opcional

		print(texto);
		print(cor ?? "preto"); # a cor padrao ira ser preta caso só seja digitado só a string texto
		print(largura ?? 10.0); # a largura padrao ira ser 10.0 caso só seja digitado só a string texto 



	string nome = "Lojinha do Daniel";
	double num2 = 20.0;
	int banana = 5;
	double num1 = 10.0;
	double preco = 10.50;
	bool aindaTem = true;
    double result = num1 + num2;


	print("nome da lojinha é: "+ nome); # concatenação em Dart 
	print("A $nome tem $bananas de bananas); # outro modo de mostrar as variaveis sem ser por concatenação



	bananas = 10;

	var teste = 1;

	print(teste);

	teste = "hahahahha";

	print(teste); # a variavel teste mudou o seu tipo de int para string (casting), algo que não pode ser feito na linguagem Dart


bool aprovado = true;
string info; # quando não se declara uma variavel, ela fica com um valor null

if(aprovado){
	info = "aprovado!";
} 

print("reprovado");


string nome; # null
string info2 = nome ?? "Não informado"; # caso o texto seja null, a string info2 ira receber o texto "Não informado"



int meuNumero = 10;

switch(meuNumero){
	
	case 1: 1;
	print("o numero é: 1");
	break;

	case 2: 2;
	print("o numero é: 2");
	break;

	case 3: 3;
	print("o numero é: 3");
	break;

	case 4: 5;
	print("o numero é: 5");
	break;

	case 6: 10;
	print("o numero é: 10");

	default;
	print("Não achei");

}



class Pessoa (){

	String nome;
	int idade;
	double altura;

	void dormir(){
		print("$nome está dormindo");

	}

	void aniver(){
		idade++;
	}

	void comer(){
		peso++;
	}
	

	void main(){

		String algumacoisa = "valor";

		pessoa pessoal = Pessoa();

		pessoa1.nome = "jorge"
		pessoa1.idade = 30;
		pessoa1.altura = 1.80;


		pessoa pessoa2 = pessoa();

		pessoa2.nome = "maria";
		pessoa2.idade = 20;
		pessoa2.altura = 1.78;


		pessoa pessoal = Pessoa();


		pessoa3.nome = "carlos";
		pessoa3.idade = 23;
		pessoa3.altura = 1.69;


print(pessoa1.nome);
print(pessoa2.nome);
print(pessoa3.nome);


print(pessoa.idade);

pessoa1.aniver();

print(pessoa1.idade); # a idade de Joao foi aumentada pela função

pessoa2.dormir();


pessoa(String nome, int idade, Double altura){ # O construtor da classe Pessoa
	this.nome = nome;
	this.idade = idade;
	this.altura = altura;
}


pessoa(this.nome, this.idade, this.altura) # em Dart, da para selecionar direto os atributos da classe sem antes precisar cria um construtor



Pessoa.nascer(this.idade, this.altura){
	idade = 0;
	print("$nome nasceu!");
	dormir();
}



}

Pessoa nene = Pessoa.nascer("Enzo", 0.30);




}

int get idade {
	return _idade; # assegura que idade não pode ser mudado fora do escopo da função

}



set altura(double altura){
	if(altura > 0.0 && altura < 3.0){
		_altura 
	}
}

































}



