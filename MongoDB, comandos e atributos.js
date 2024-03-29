


  % Bem vindo(a) ao meu tutorial dos comandos da base de dados não relacional, 
  MondoDB é uma base de dados que utiliza o JSON como manipulação de dados, por ser          
  assim, é uma base de dados extremamente facil e rapida de se utiizar, assim, 
  se voce já tem familiaridade com JavaScript não tera dificuldade em aprender MongoDB


 @ Antes de começar a falar sobre o MongoDB, 
 uma coisa extremamente importante de se falar é o vocabulario que as base de dados relacionais e não relacionais tem de      
 diferentes uma da outra para definir a mesma hierarquia de estrutura de dados,
 para saber a diferença e não se confundir na hora que voce estiver manipulando os dados com ambas as lingugens de exploração
 segue o exemplo dos seus respectivos vocabularios abaixo:


 # SQL / MongoDB


 @ tables = colletions
 
 @ rows = documents 
 
 @ coluns = filds



@ cls #  ira limpar a tela de comandos 

@ use pessoasData # foi criado uma base de dados com o nome "pessoasData"

@ show dbs # mostra todos os bancos de dados criados até o momento

@ db.pessoas.insertOne({ nome: "Matheus", idade: 30, profissão: "Programador", esta_empregada: true }) # 

@ db.pessoas.insertMany({
	( nome: "Joao", idade: 40, profissao: ""Arquiteto: false),
	( nome: "Maria", idade: 23 profissao: "professora", esta_empregado: 
	true)
	}); # O comando "insertMany", diferente do "insertOne", serve 
	para inserir varios dados no banco de dados atraves de uma array

@ db.pessoas.find().pretty() # o comando "find()" serve para filtrar 
todos os arquivos dentro daquela colletions repassada anterioramente, 
o comando "pretty()" server para mostrar esses dados em forma vertical 
(melhora a visibilidade do mesmo)

@ db.pessoas.find({ esta_empregado: true }) # ira filtrar todos os dados
da qual contem esse atributo passado

@ db.pessoas.find({ esta_empregado: true }).count() # ira contar quantas 
pessoas tem esses atributos na colletions

@ db.pessoas.findOne({ nome: "Joao"}) # ira mostrar qual dados do banco 
de dados satisfaz o atributo passado (se tiver mais de um dados do 
	qual satisfazer a sentença, ele só ira mostrar um)

@ db.pessoas.find({ idade: { $gt: 30 }}) # gt significa "greater than" 
(maior que), logo, ele ira encontrar todos os dados da qual a idade 
seja maior que 30 

@ db.pessoas.find({ idade: { $gte: 30 }}) # gte significa "greater than"
and igual "(maior que e igual), logo, ele ira encontrar todos os" 
"dados" 
da qual a idade seja maior que e igual a 30 

@ db.pessoas.find({ idade: { $lt: 25 }}) # significa "less than" (maior 
que e igual), logo, ele ira encontrar todos os dados da qual a 
idade seja menor que 25 

@ db.pessoas.find({ idade: { $lte: 25 }}) # significa "less than and"
igual "(maior que e igual), logo, ele ira encontrar todos os" 
"dados da qual a idade seja menor que e igual a 25" 

@ db.pessoas.updateOne({ nome: "joao"}, { $set: { esta_empregado: true}}) # a função "updateOne()" recebe um objeto como parametro do qual o 
seu primeiro item é qual atributo dos dados ira ser mudado, depois 
junto com "$set:" e dentro de set, ira ser colocado qual atributo 
quer mudar do dado 

@ db.pessoas.updateMany({}, {$set: { salario: 5000 }}) # ira atualizar 
todos os atributo dos dados para salario 5000

@ db.pessoas.deleteOne({ name: "Josias"})

@ db.pessoas.deleteMany({ name: "Josias"})

@ db.pessoas.updateOne({ nome: "Matheus"}, { $inc: { salario: 1000 }) 
# a função inc (increment), incrementa 1000 no valor de salario

@ db.pessoas.createIndex({ "nome": 1 }) # cria um index nome

@ db.pessoas.getIndexes() # ira mostrar uma lista na vertical de 
indexes

@ db.pessoas.explain().find{{ nome: "Joao" }}

@ db.pessoas.dropIndex("Carlos") # exclui o documento do indice

@ db.pessoas.drop() # ira excluir a colletion pessoas

@ db.pessoasData.dropDatabase() # exclui a base de dados "pessoasData"


























