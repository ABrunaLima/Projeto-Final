// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

/* DOCUMENTAÇÃO DAS APIs E ENDPOINTS

LISTA DE APIs ATUAL
1 - API que carrega o closet;
2 - API que adiciona roupa ao LOOK;
3 - API que devolva as peças de roupa através do ID;
4 - API do LOGIN;
5 - API que adicione um LOOK ao CLOSET;
6 - API que devolve um LOOK através do ID.
(atualizar caso hajam mais APIs necessárias)

*/

/* DOCUMENTAÇÂO DO FUNCIONAMENTO da API 1

A API 1 é responsável por carregar um CLOSET, ou seja, mostrará os LOOKs que estão armazenados dentro de um DETERINADO CLOSET,
  . limite de até 10 CLOSETs POR UTILIZADOR;
  . apenas UTILIZADORES válidos, têm acesso a esta ação;
deve ser possível selecionar o CLOSET pretendido, os LOOKs só serão mostrados quando se estiver dentro do CLOSET.

Deve ser possível:
                  . eliminar - eliminar o closet (quando esta ação for acionada, 
                                                  mostrar uma mensagem de confirmação "Deseja eliminar este Closet?  Sim  Não")

                  . editar - remover looks do closet (caso o utilizador queira remover um ou mais looks do closet,
                                                      mostrar uma mensagem de confirmação "Deseja remover este Look?  Sim  Não" )

                  . criar - criar um closet (não é obrigatório ter looks dentro de um closet para ele existir)

CAMINHO ---> GET/api/closet/id:

*/

/* DOCUMENTAÇÂO DO FUNCIONAMENTO da API 2

A API 2 é responsável por ADICIONAR peças de roupa a um LOOK, ou seja, quando o utilizador estiver a montar um LOOK na MAIN PAGE
e escolher determinadas peças de roupa ao LOOK, esta API vai ser responsável pela ação de transportar a peça selecionada do CARROSSEL para o LOOK
  . tanto o VISITANTE e o UTILIZADOR têm acesso a esta ação;  

CAMINHO ---> POST/api/adiciona/roupa/look

*/

/* DOCUMENTAÇÂO DO FUNCIONAMENTO da API 3

A API 3 é responsável por DEVOLVER as peças de roupa ATRAVÉS do ID, ou seja, vai buscar as peças de roupa recorrendo ao ID de cada uma.

CAMINHO ---> GET/api/roupa/id:

*/

/* DOCUMENTAÇÂO DO FUNCIONAMENTO da API 4

A API 4 é responsável por fazer o LOGIN, ou seja, quando um VISITANTE se torna um UTILIZADOR, isto acontece quando o VISITANTE carrega no BOTÃO de LOGIN
e torna-se num UTILIZADOR, para isso:
                                      . mostra um campo de texto, que pede um nome(CAMPO OBRIGATÓRIO);
                                      . não avança até este campo estiver preenchido;
                                      . não apresenta nenhuma mensagem de erro;
                                      . o nome tem no máximo até 30 caracteres;
                                      . deve ser possível cumprir a ação usando um onClick da tecla ENTER ou apenas carregando no botão "Confirmar";
                                      . o utilizador é reconhecido pelo token que lhe é atribuído quando faz o LOGIN;

Quando estiver LOGADO aparece uma mensagem de boas vindas com o NOME inserido anteriormente pelo UTILIZADOR

CAMINHO ---> GET/api/login

*/

/* DOCUMENTAÇÂO DO FUNCIONAMENTO da API 5

A API 5 é a responsável por ADICIONAR um LOOK ao CLOSET, ou seja, quando um UTILIZADOR criar um LOOK, esta API é responsável por armazenar este LOOK 
em um determinado CLOSET
  .apenas UTILIZADORES válidos têm acesso a esta ação;

Deve ser possível:
                    . o UTILIZADOR escolher o CLOSET em que quer guardar o LOOK;
                    . caso não escolha nenhum CLOSET, adiciona no ÚLTIMO CLOSET em que foi guardado um LOOK;
                    . caso não exista nenhum CLOSET selecionado previamente, guarda no primeiro CLOSET criado;

CAMINHO ---> POST/api/look

*/

/* DOCUMENTAÇÃO DO FUNCIONAMENTO da API 6

A API 6 é a responsável por DEVOLVER um LOOK ATRAVÉS do seu ID, ou seja, quando um utilizador selecionar um LOOK dentro do CLOSET,
este é devolvido através do seu ID, sendo o ID a identificação do LOOK

Deve ser possível:
                    . selecionar apenas um LOOK de cada vez;
                    . se o LOOK for eliminado, o ID também é eliminado, para não acumular na cache
                    
CAMINHO ---> GET/api/look

*/

