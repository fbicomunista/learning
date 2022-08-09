let "fruta": string = "abacaxi"


const x: number = 10;


x = "string" # em JavaScript, esse codigo iria converter a variavel x de number para string (castling), 
mas em TypeScript isso não é permitido catling


# inferencia X annotation

inferencia: let y = 12;

annotation: let y: number = 12;

inferencia: let x = "ola";
 
annotation: let x: string = "ola";

inferencia: let z = 3.24;
 
annotation: let z: number = 3.24;


# ambos os metodos eu estou declarando a variavel "y" "x" e "z" a unica diferença é os metodos diferente de declaração 



# criando uma array

const myNumber: number[] = [1, 2, 3]
const MyOther: Number[] = [5, 6, 7]


# criando tuplas ( )

let myTuple: [number, string, string["maça", "banana", "laranja"]] # foi criada uma tupla por "inferencia"

myTuple = [true, false, true] # a tupla não podera ser mudada usando por ambos os metodos de declaração



# any

let a:any = 0 # o tipo da variavel é todos os tipos disponiveis

a = "teste"
a = true
a = []


# union Type

let id: string | number = "10" # a variavel declarada tem os dois tipos "string" e "number" ao mesmo tempo




id = 200
id = true
id = []


# type alias

type myidType = number | string # criei um tipo personalizado 

const user: myIdType = 10 # a variavel foi declarada com um tipo personalizado "myIdType" configurado anterioramente


# tamanho de roupas (size: medio, size: pequeno)
enum size {
	P = "Pequeno"
	M = "Media"
	G = "Grande"
}


const camisa = {
	name: "camisa gola V",
	size: size.G
};


# literal Type 

let teste: "algumvalor" # a variavel teste não possue tipo apenas o seu valor literal "algumvalor"


# interFaces

interface MathFunctionParams {
	n1: number,
	n2: number
}

function sumNumbers(nums: MathFunctionParams) {
	return nums.n1 + n2
}

sumNumbers({ n1:1, n2:2 })


# narrowing, chegagem de tipos

func doSomething(info: number | boolean) {
	if(typeof info === "number") {
		console.log("o numero é $(info)"
			return
	}
console.log("não foi passado um numero")


# generics 

function showArraysItens<T>(arr: T([]) {
	arr.forEach((itens) => {
		console.log("ITEM: $(item)")
	}
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);


class User {
	name
	role
	isApproved

	constructor(name: string, role: string, isApproved: boolean) {
		this.name = name
		this.role = role
		this.isApproved = isApproved
	}
}












# criei um array

string[] nomes = {"maria", "josé", "marcos", "pedro", "jubileu"}


string[] nomes2 = new string[] { "marcelino", "casa grande", "jucelino", "joaquim", "marta"}

console.writeLine(nomes2[3]);



# criei uma matriz

string[,] nome = new string{2, 2};


var p = document.createElement("p"); # ira criar uma tag <p> </p>

var ola:string = "sasas"; # criei uma variavel e typei ela do tipo string
var numero:number = 20;
var texto:string = "olha eu sou um texto";

p.textContent = ola; # ira mudar o conteudo da tag <p> </p> para "ola"
document.body.appendchild(p); # 

var num: number = 18; # criou uma variavel number
var bool: boolean = true; # criou uma variavel bool
var str1: string = "a beautiful message"; # criou uma variavel string
var str2: string = `$(str1) to william`; # ira mostrar a variavel str1  

function func():void{}; # foi criada uma funçaõ do tipo primitivo void

let list: number[] = [1, 2, 3]; # criei um array
let list2: Array<number> = [1, 2, 3]; # criei um array

let tuple:{string: number}; # criei um modelo de tupla

tuple = {"William", 22}; # criei uma tupla baseada no molde da mesma
tuple = {"Rodrigo", 43}; # criei outra tupla

console.log(tuple[0].toLowerCase()); # ira pegar o primeiro item da primeira tupla e 
colocar tudo em maiscula





}
