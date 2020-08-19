# Bloco 1 - Unix & Bash

=== Parte I - Criação de arquivos e diretórios ===

----------------------------------------------------

1° Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.

-----------------------------------------------------

2° Crie um arquivo de texto com o nome trybe.txt.

-----------------------------------------------------

3° Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.

-----------------------------------------------------

4º Renomeie o arquivo trybe.txt.

-----------------------------------------------------

5º Dentro de unix_tests, crie um novo diretório chamado backup.

-----------------------------------------------------

6º Dentro de unix_tests, crie um novo diretório chamado backup.

-----------------------------------------------------

7º Dentro de unix_tests, crie um novo diretório chamado backup2.

-----------------------------------------------------

8º Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

-----------------------------------------------------

9ª Apague a pasta backup.

-----------------------------------------------------

10º Renomeie a pasta backup2 para backup.

-----------------------------------------------------

11º Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

-----------------------------------------------------

12º Apague o diretório backup.

-----------------------------------------------------

13º Limpe o terminal.
Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado skills.txt:

Copiar
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

-----------------------------------------------------

14º Mostre na tela as 5 primeiras skills do arquivo skills.txt.

-----------------------------------------------------

15º Mostre na tela as 4 últimas skills do arquivo skills.txt.

-----------------------------------------------------

16º Apague todos os arquivos que terminem em .txt.

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------



=== Parte I -Manipulação & Busca ===




1º Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar


curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

-----------------------------------------------------

2º Mostre todo o conteúdo do arquivo countries.txt na tela.

-----------------------------------------------------
3º Mostre o conteúdo de countries.txt, página por página, até encontra a Zambia.

-----------------------------------------------------

4º Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

-----------------------------------------------------
5º Busque por Brazil no countries.txt.

-----------------------------------------------------

6ºBusque novamente por brazil, mas agora utilizando o lower case.

Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.

-----------------------------------------------------

7º Busque pelas frases que não contenham a palavra fox.

-----------------------------------------------------

8º Conte o número de palavras do arquivo phrases.txt.

-----------------------------------------------------

9º Conte o número de linhas do arquivo phrases.txt.

-----------------------------------------------------

10º Crie os arquivos empty.tbt e empty.pdf.

-----------------------------------------------------

11º Liste todos os arquivos do diretório unix_tests.

-----------------------------------------------------

12º Liste todos os arquivos que terminem com txt.

-----------------------------------------------------

13º Liste todos os arquivos que terminem com tbt ou txt.

-----------------------------------------------------

14º Acesse o manual do comando ls.

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------

#Unix & Bash - Parte 2

Parte I - Comandos de Input e Output

1ºNavegue até a pasta unix_tests;

-----------------------------------------------------

2º Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

-----------------------------------------------------

3º Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

-----------------------------------------------------

4ºConte quantas linhas tem o arquivo skills2.txt.

-----------------------------------------------------

5º Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

-----------------------------------------------------

6º Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.

-----------------------------------------------------

7º Conte o número de linhas que contêm as letras br.

-----------------------------------------------------

8º Conte o número de linhas que não contêm as letras br.

-----------------------------------------------------

-----------------------------------------------------

9º Adicione dois nomes de países ao final do arquivo phrases2.txt.

-----------------------------------------------------

10º Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

-----------------------------------------------------

11º Ordene o arquivo bunch_of_things.txt.

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------


Parte II - Permissões

1º Navegue até a pasta unix_tests;

-----------------------------------------------------

2° Rode o comando ls -l e veja quais as permissões dos arquivos;

-----------------------------------------------------

3º Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

-----------------------------------------------------

4º Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;

Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

-----------------------------------------------------

5º Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt. Leia este artigo para entender mais sobre o que é e como funciona essa numeração 644.

Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------

Parte III - Processos & Jobs

1º Liste todos os processos;

-----------------------------------------------------

2º Agora use o comando sleep 30 & ;

-----------------------------------------------------

3° Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);

-----------------------------------------------------

4º Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;

-----------------------------------------------------

5º Crie um processo em background que rode o comando sleep por 300 segundos.

-----------------------------------------------------

6º Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

-----------------------------------------------------

7º Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.

Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal).

-----------------------------------------------------

8º Retome a execução do processo sleep 100 em background com o comando bg.

-----------------------------------------------------

9º Termine a execução de todos os processos sleep (mate os processos).

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------

(Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do UNIX? ☝ 🎊

Leia este artigo para fazer os exercícios de aquecimento abaixo


1º Abra o terminal e execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal;

-----------------------------------------------------

2º Crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >;

-----------------------------------------------------


3º Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc;

-----------------------------------------------------

4º Execute o comando sl. Agora tente sl -F;

-----------------------------------------------------

5º Execute o comando cowsay. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;

-----------------------------------------------------

6º Descubra os fatores primos do número 42 usando o comando factor;

-----------------------------------------------------

7º Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev.

-----------------------------------------------------

8ºExecute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅

-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------
* O comando "mkdir" (make directory) serve para a criação de diretórios. Um diretório é um local que serve de armazenamento para outros diretórios ou arquivos

* Na linha de comando do sistema operacional Unix, o "ls" (derivado das primeiras consoantes da palavra inglesa list) é um comando usado para listar arquivos e diretórios.

* O Comando "Touch" do Linux é usado principalmente para criar arquivos vazios, além de alterar o registro de data e hora (timestamp) de arquivos ou pastas. 

* O comando "cp" é usado para copiar diretórios ou arquivos.

* O comando "mv" tem a função de mover ou renomear arquivos. A utilização dele é praticamente igual a do comando cp.

* "rmdir" Este comando removerá o diretório dolor. Caso o diretório especificado não esteja vazio, ele não será removido. ...

* O comando "cat" do Linux é um dos mais úteis para se aprender. Seu nome é uma derivação da palavra concatenate (concatenar) e permite que você crie, una e exiba arquivos no formato padrão de tela ou em outro arquivo, entre outras coisas.

* O "pwd" (print working directory) é um comando que imprime o nome do diretório local em uma interface de linha de comando. Este comando é encontrado nos sistemas operacionais da família Unix.

* O comando 'rm' é usado para excluir arquivos ou diretórios do sistema. As opções mais usadas são: -f: Força a remoção, não pergunta antes de remover. -R: Remove diretório e todo seu conteúdo. 
apagar todo conteúdo com .txt exemplo rm *.txt

* "clear" é um comando Unix e UNIX like, que limpa o conteúdo da tela de um terminal virtual. O comando não necessita de parâmetros, ele utiliza variáveis do ambiente de trabalho atual para determinar como limpar a tela.


* O comando "head" é usado para mostrar no terminal o conteúdo do início de um arquivo de texto. Por padrão, ele mostrará as primeiras 10 linhas do arquivo. 
exemplo: head -n 5 skills.txt

* "tail" números N ou tails de uma entrada. Geralmente, ele exibe, ou imprime, os últimos 10 números do arquivo. Se utilizarmos em um único nome de arquivo, dados de cada arquivo procedem de seu nome de arquivo com um header.
exemplo tail -n 4 skills.txt


* "cat" --- Em sistemas operacionais do tipo Unix, o comando cat lê dados de arquivos e gera seu conteúdo. É a maneira mais simples de exibir o conteúdo de um arquivo na linha de comando 

* "less" --- Permite fazer a paginação de arquivos ou da entrada padrão. O comando less pode ser usado como comando para leitura de arquivos que ocupem mais de uma tela.

 less countries.txt
 ou...
 more countries.txt

* "more" --- O comando more permite fazer a paginação de arquivos. O mesmo também permite a leitura de arquivos longos. Também pode usar o | (pipe) para redirecionar a saída de um comando para o more. Enter ou espaço para correr a página e q para sair.


  less countries.txt
  ou...
  more countries.txt
  agora que você está dentro do arquivo, digite uma barra `/` e em seguida a palavra Zambia
  /Zambia
  pressione "Enter" para sair
  
  
  * "grep" --- O grep é um comando com uma função simples: ele procura por trechos de texto (strings) dentro de arquivos ou diretórios e retorna para você em quais arquivos a string foi encontrada, inclusive mostrando a linha em que isso ocorreu.
  
  grep -i brazil countries.txt //o lentra i transforma todo em maiusculo
  grep -v fox pharases.txt // a letra -v busca pelas frase que não contenham a palavra fox
  
  * "wc -l" ---Existem comandos dentro do Unix/Linux que desconhecemos, porque são muito pouco usados mesmo. O comando " wc arquivo " fornece o número de linhas, palavras e bytes contidos no arquivo.
 
  * "ls -l "--- liste todos os arquivos e a sua permissão
  
  * "ls -l *txt" --- o sibolo de * lista todos os arquivos que terminem com txt
  
  * "ls -l *t?t" --- o sibolo ? perminte adiconar qualquer letra em geral para buscar.
  
  * "man " --- O man é o comando do sistema Unix e similares que exibe, de forma adequada, as páginas de manual do Unix, ou man pages, que são pequenos arquivos de ajuda. 
  exemplo : man l
  
  * "echo" --- Em Informática, echo é um comando disponível no Unix que apresenta um texto na tela de um terminal de computador. É um comando utilizado em scripts para exibir mensagens na tela ou em um arquivo.
  
  * "sort" --- O comando sort do sistema operacional Unix possui a função de ordenar uma sequência de linhas de maneira crescente ou decrescente de maneira numérica ou alfabética

* "|" pipe ajuda colocar dois comando ou mais no mesmo codigo de linha
exemplo : sort < skills2.txt | head -n 3 > top_skills.txt
