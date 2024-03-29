
   % Bem vindo(a), mySQL é uma base de dados que usa o modelo relacional em oposição a outras bases de dados não relacionais como MongoDB (que usa objetos em              JavaScript) para manipulação de seus dados, é a "mãe" das linguagens de exploração de base de dados, possui uma sintaxe não muito complicada se voce já tiver          acostumado com Programação, usa comandos basicos e atributos extras para criar linhas unicas e/ou mais especificas que seram ensinados logo abaixo 


     Comandos:
     

 @ create database " " ## cria uma nova base de dados com o nome passado entre os parenteses

 @ create table " " ## cria uma nova tabela com o nome passado entre os parenteses

 @ use " " ## abre uma tabela com o nome passado entre os parenteses

 @ desc " " ## descreve a tabela com o nome passado entre os parenteses ou sem nome passado que ira mostrar todas as tabelas já existentes
 
 
 @@ create table "pessoas" IF NOT EXIST UNIQUE { ## cria uma nova tabela, o atributo "IF NOT EXIST" obriga a só criar essa tabela se ainda não tiver nenhuma tabela       com esse mesmo nome na base de dados, caso existir uma tabela com esse nome, ele ira cancelar a criação de uma nova tabela imediatamente, precisa terminar com         "{" para    indicar os dados que iram ser da tabela


 @ default character set utf8
   default collate utf8_general_ci ## duas linhas de codigo que servem para definir a formatação uft - 8 
  
 @ id int NOT NULL, AUTO_INCREMENT, ## id significa "chave primaria", ou seja, cada linha dessa tabela tera um valor de identificação em numero unico, neste caso como    foi a primeira a ser criada sua chave primaria sera 1, INT significa "inteiro", ou seja, obriga o valor a ser passado a ser int, se não for, não havera criação de    tabela, "NOR NUll" significa se a coluna/tabela não estiver vazia ele ira dar proseguemento a criação e "AUTO_INCREMENT" significa ira ser incrementado 1 a mais a    sua chave primaria, mais alem voce entendera melhor isso   
 
   nome int UNSIGNED NOT NULL,
   nascimento date,
   sexo enum("M","F"),
   peso decimal(5,2),
   altura decimal(3,2),
   nacionalidade varchar(20) default 'brasil',
   PRIMARY KEY(id)
   } default charset = utf8;

 @ insert into pessoas 
   (id, nome, nascimento, sexo, altura, naconalidade)
  values
   ('default', 'godofredo', '1984-01-02', 'M','78-5','1.83','Brasil');
      
      =
 @@ insert into pessoas values ## comando atalho para não ter que ser obrigado a dizer de qual tabela ira ter que ser adicionado novos dados ( percebeu que não tem o (id, nome, nascimento, sexo, altura, naconalidade) nela?
   ('default', 'godofredo', '1984-01-02', 'M','78-5','1.83','Brasil');
     
     
 @@ insert into pessoas values
   ('default', 'godofredo', '1984-01-02', 'M','78-5','1.83','Brasil'),
   ('default', 'pedro', '2000-07-15', 'M','52.3','1.45','EUA'),
   ( ... ); ## voce pode tambem adicionar varios novos elementos na tabela sem ter que ficar digitando o comando de inserir novos dados ( insert into pessoas values ) 

 @ select * from "pessoas" ## comando que ira selecionar todos os elementos da tabela pessoas

 @ alter table "tabela"; ## inicio do comando geral para editar algo da base de dados me refiro inicio porque nos proximos codigos é que iram ser especificados quais alteraçoes iram ser feitas

 @ add column "column" varchar(10)  after 'nome'; // adiciona um novo campo na tabela depois do nome

 @ add column 'codigo' int first; // adiciona um novo campo em primeiro lugar na tabela

 @ alter table "pessoas"

 @ modify column 'profissao' varchar(20); // modifica a column como queira

 @ alter table "pessoas"

 @ change column "column antiga" "column nova"; // modifica o nome do campo

 @ alter table "pessoas"

 @ rename to "gafanhotos"; // renomeia o nome da tabela inteira

 @ alter table "pessoas"

 @ add primary key(idcurso); // adiciona uma primary key

 @ drop table "tabela"; // exclui uma tabela inteira

 @ drop table if exists teste; // exclui uma tabela inteira


 @ update "tabela"; // edita o campo aonde o outro campo esta 
   set nome = "HTML 5", ano = 2015, carga = 40
   where idcurso = "1"
   limit = 1

 @ delete from cursos
   where idcurso = "8"; // deleta dentro da tabela cursos, todas as colunas da qual o id curso e´8
   limit = 3

 @ truncate table cursos; // exclui a tabela inteira
   order by "campo" // filtra pelo campo selecionado
   order by nome desc; // filtra pelo campo selecionado em ordem decrescente

 @ select nome, carga, ano, from cursos 
   order by nome; // filtra só as colunas selecionadas

 @ select nome, carga, ano, from cursos 
   order by ano; // filtra só as colunas selecionadas

 @ select * from cursos 
   where ano <= '2016'
   order by nome; // filtra todos os cursos de 2016 ordenado por nome

 @ select * from cursos 
  where ano between 2016 and 2018
  order by nome desc; // filtra todos os cursos entre 2016 e 2018

 @ select * from cursos 
   where ano in (2016, 2017, 2018)
   order by; // filtra só todos os cursos de 2016, 2017 e 2018


 @@ select * from cursos 
   where carga > 35 and totalaulas < 30; // filtra todos os cursos que tem carga menor que 30 e o ototalaulas é menor que 30

 @@ select * from cursos 
   where nome like p%; // filtra todos o campo nome aonde começão com p 

 @@ select * from cursos 
    where nome like %a%; // filtra todos o campo nome aonde tem "a" no meio 

 @@ select * from cursos 
    where nome not like %a%; // filtra todos o campo nome aonde não tem "a" no meio 

 @@ select * from cursos 
    where nome like p_p%; // filtra todos o campo nome aonde começa por "p", tem uma unica letra, um "p" no meio com qualquer letra terminando-o

 @@ select distinct carga from cursos; // filtra todos os que não são repetidos

 @@ select count(*) from cursos 
    where carga > 40; // conta todos os campos na base de dados cursos que tenham carga menor que 40

 @@ select max(carga) from cursos // filtra qual é a maior carga da base de dados cursos  
    where ano = 2016

 @@ select min(carga) from cursos // filtra qual é a menor carga da base de dados cursos  

 @@ select sum(totalaulas) from cursos; // soma o total de aulaas da base de dados cursos

 @@ select avg(totalaulas) from cursos; // faz a media de totalaulas da base de dados cursos

 @@ select carga from cursos
    group by carga; // vai agrupar cada registro por seu grupo

 @@ select carga, count(carga) from cursos
    group by carga; // vai agrupar cada registro por seu grupo e contar 
    having count(nome) > 3; // 

 @@ select ano, count(*) from cursos
    group by aonde
    having count(ano) >= 5 
    order by count(*) desc // 

 @@ alter table gafanhotos
    add foreign key (cursopreferido)
    references cursos(idcurso);

 @@ select * from gafanhotoss;
    select * gafanhotos.nome, cursos.nome, cursos.ano 
    from gafanhotos as g join cursos as c 
    on cursos.idcursos = gafanhotos.cursopreferido //

  @@ select * from gafanhotoss;
     select * gafanhotos.nome, cursos.nome, cursos.ano 
     from gafanhotos as g left outer join cursos as c 
     on cursos.idcursos = gafanhotos.cursopreferido //




















drop column "column"; // elimina a coluna
drop database "tabela" // exclui uma tabela







